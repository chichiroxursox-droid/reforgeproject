import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface SubmissionRequest {
  name: string;
  email: string;
  school: string;
  grade: string;
  category: string;
  title: string;
}

async function sendEmail(to: string[], subject: string, html: string) {
  const resendApiKey = Deno.env.get("RESEND_API_KEY");
  
  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${resendApiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: "Reforge Project <onboarding@resend.dev>",
      to,
      subject,
      html,
    }),
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
    const { name, email, school, grade, category, title }: SubmissionRequest = await req.json();

    console.log("Sending submission confirmation to:", name, email);

    const categoryName = category === "art" ? "Art Competition" : "Engineering Design Competition";

    // Send confirmation to the submitter
    const confirmationResponse = await sendEmail(
      [email],
      "Competition Submission Received - Reforge Project",
      `
        <h1>Thank you for your submission, ${name}!</h1>
        <p>We have received your entry for the <strong>Reforge Youth Design & Art Competition</strong>.</p>
        <h3>Submission Details:</h3>
        <ul>
          <li><strong>Category:</strong> ${categoryName}</li>
          <li><strong>Project Title:</strong> ${title}</li>
          <li><strong>School:</strong> ${school}</li>
          <li><strong>Grade:</strong> ${grade}</li>
        </ul>
        <p>We'll review your submission and notify you soon if you've been selected as a finalist.</p>
        <p>Best of luck!</p>
        <p>— The Reforge Project Team</p>
      `
    );

    console.log("Confirmation email sent:", confirmationResponse);

    // Send notification to the organization
    const notificationResponse = await sendEmail(
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
      `
    );

    console.log("Notification email sent:", notificationResponse);

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { "Content-Type": "application/json", ...corsHeaders },
    });
  } catch (error: any) {
    console.error("Error in send-contact-email function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
