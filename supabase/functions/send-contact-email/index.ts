import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { encode as base64Encode } from "https://deno.land/std@0.168.0/encoding/base64.ts";
import { createClient } from "npm:@supabase/supabase-js@2.89.0";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

const SUPABASE_URL = Deno.env.get("SUPABASE_URL") as string;
const SUPABASE_SERVICE_ROLE_KEY = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") as string;
const SUBMISSIONS_BUCKET = "competition-submissions";

const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY, {
  auth: { persistSession: false, autoRefreshToken: false },
});


interface SubmissionRequest {
  name: string;
  email: string;
  school: string;
  grade: string;
  category: string;
  title: string;
  description: string;
  statement: string;
  fileUrl: string | null;
  fileName: string | null;
}

type ResendAttachment =
  | { filename: string; content: string }
  | { filename: string; path: string; contentId?: string };

function extractStorageObjectPath(fileUrl: string, bucket: string): string | null {
  try {
    const url = new URL(fileUrl);
    const parts = url.pathname.split("/").filter(Boolean);
    const bucketIndex = parts.findIndex((p) => p === bucket);
    if (bucketIndex === -1 || bucketIndex >= parts.length - 1) return null;
    return parts.slice(bucketIndex + 1).join("/");
  } catch {
    return null;
  }
}

async function sendEmailWithAttachment(
  to: string[],
  subject: string,
  html: string,
  attachments?: ResendAttachment[]
) {
  const resendApiKey = Deno.env.get("RESEND_API_KEY");

  const body: Record<string, unknown> = {
    from: "Reforge Project <onboarding@resend.dev>",
    to,
    subject,
    html,
  };

  if (attachments && attachments.length > 0) {
    body.attachments = attachments;
  }

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${resendApiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });

  if (!response.ok) {
    const error = await response.text();
    throw new Error(`Failed to send email: ${error}`);
  }

  return response.json();
}


const handler = async (req: Request): Promise<Response> => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const {
      name,
      email,
      school,
      grade,
      category,
      title,
      description,
      statement,
      fileUrl,
      fileName,
    }: SubmissionRequest = await req.json();

    console.log("Processing submission from:", name, email);

    const categoryName = category === "art" ? "Art Competition" : "Engineering Design Competition";

    // Prepare attachments if file exists
    let attachments: ResendAttachment[] = [];

    if (fileUrl && fileName) {
      try {
        const objectPath = extractStorageObjectPath(fileUrl, SUBMISSIONS_BUCKET);

        if (objectPath) {
          console.log("Downloading submission file from storage:", objectPath);

          const { data: fileBlob, error: downloadError } = await supabase.storage
            .from(SUBMISSIONS_BUCKET)
            .download(objectPath);

          if (downloadError) {
            throw downloadError;
          }

          const bytes = new Uint8Array(await fileBlob.arrayBuffer());
          const base64 = base64Encode(bytes.buffer);

          attachments.push({
            filename: fileName,
            content: base64,
          });

          console.log("Attachment prepared successfully:", fileName);
        } else {
          // Fallback: try direct fetch (e.g., signed URL)
          console.warn(
            "Could not extract storage object path from fileUrl; falling back to direct fetch.",
            fileUrl
          );

          const fileResponse = await fetch(fileUrl);

          if (!fileResponse.ok) {
            console.error(
              "Failed to download file via direct fetch:",
              fileResponse.status,
              await fileResponse.text()
            );
          } else {
            const bytes = new Uint8Array(await fileResponse.arrayBuffer());
            const base64 = base64Encode(bytes.buffer);

            attachments.push({
              filename: fileName,
              content: base64,
            });

            console.log("Attachment prepared successfully via direct fetch:", fileName);
          }
        }
      } catch (fileError) {
        console.error("Error processing file attachment (continuing without attachment):", fileError);
      }
    }

    console.log("Attachment count before sending email:", attachments.length);

    // Send notification to the organization with all submission details
    const notificationResponse = await sendEmailWithAttachment(
      ["thereforgeprojectsla@gmail.com"],
      `New Competition Submission: ${title}`,
      `
        <h2>New Competition Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>School:</strong> ${school}</p>
        <p><strong>Grade:</strong> ${grade}</p>
        <p><strong>Category:</strong> ${categoryName}</p>
        <p><strong>Project Title:</strong> ${title}</p>
        <hr />
        <h3>Project Description:</h3>
        <p>${description}</p>
        <hr />
        <h3>Artist/Designer Statement:</h3>
        <p>${statement}</p>
        ${fileName ? `<hr /><p><strong>Attached File:</strong> ${fileName}</p>` : ""}
      `,
      attachments
    );

    console.log("Notification email sent:", notificationResponse);

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { "Content-Type": "application/json", ...corsHeaders },
    });
  } catch (error: any) {
    console.error("Error in send-contact-email function:", error);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { "Content-Type": "application/json", ...corsHeaders },
    });
  }
};

serve(handler);
