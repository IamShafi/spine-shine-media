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
      <h2>Hey Team,</h2>
        <p>A new lead just booked an intro call! Here are the details:</p>
         <p>👤 <strong>Lead Name:</strong> ${data.lead.firstName} ${data.lead.lastName}</p>
        <p>📧 <strong>Email:</strong> ${data.lead.email}</p>
        <p>📞 <strong>Phone:</strong> ${data.lead.phone}</p>
        <p>🗓 <strong>Scheduled Time:</strong> ${data.formattedDate} ${data.time} (${data.timezone})</p>
        <p>📝 <strong>Additional Info:</strong> ${data.lead.additionalInfo || "N/A"}</p>

        <p>Please make sure to follow up and be ready for the call. 🚀</p>

      `,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Error sending email:", err);
    return NextResponse.json(
      { ok: false, error: "Failed to send email" },
      { status: 500 }
    );
  }
}
