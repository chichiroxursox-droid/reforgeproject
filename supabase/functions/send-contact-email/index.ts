import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { Resend } from "https://esm.sh/resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

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

const handler = async (req: Request): Promise<Response> => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, email, school, grade, category, title }: SubmissionRequest = await req.json();

    console.log("Sending submission confirmation to:", name, email);

    const categoryName = category === "art" ? "Art Competition" : "Engineering Design Competition";

    // Send confirmation to the submitter
    const confirmationResponse = await resend.emails.send({
      from: "Reforge Project <onboarding@resend.dev>",
      to: [email],
      subject: "Competition Submission Received - Reforge Project",
      html: `
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
      `,
    });

    console.log("Confirmation email sent:", confirmationResponse);

    // Send notification to the organization
    const notificationResponse = await resend.emails.send({
      from: "Reforge Project <onboarding@resend.dev>",
      to: ["thereforgeprojectsla@gmail.com"],
      subject: `New Competition Submission: ${title}`,
      html: `
        <h2>New Competition Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>School:</strong> ${school}</p>
        <p><strong>Grade:</strong> ${grade}</p>
        <p><strong>Category:</strong> ${categoryName}</p>
        <p><strong>Project Title:</strong> ${title}</p>
      `,
    });

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
