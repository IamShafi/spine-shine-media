import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY!);

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();

    // Send email to user
    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: data.lead.email,
      subject: "Your Call is Scheduled!",
      html: `
        <h1>Client Name: ${data.lead.firstName} ${data.lead.lastName},</h1>
        <p>Your call is scheduled for <strong>${data.formattedDate}</strong> at <strong>${data.time}</strong> (${data.timezone})</p>
        <p>Phone: ${data.lead.phone}</p>
        <p>Additional Info: ${data.lead.additionalInfo || 'N/A'}</p>
        <p>Thank you for booking with us!</p>
      `,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Error sending email:", err);
    return NextResponse.json({ ok: false, error: "Failed to send email" }, { status: 500 });
  }
}
