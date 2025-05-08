import { NextRequest, NextResponse } from "next/server";
import sgMail from "@sendgrid/mail";
import type { MailDataRequired } from "@sendgrid/mail";

export async function POST(req: NextRequest) {
  try {
    const { name, email, message } = await req.json();

    // Input validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required" },
        { status: 400 }
      );
    }

    // Set SendGrid API key
    sgMail.setApiKey(process.env.SENDGRID_API_KEY!);

    // Create email content
    const emailContent: MailDataRequired = {
      to: process.env.EMAIL_RECIPIENT || "maryanne.galo.readonly@gmail.com",
      from: process.env.VERIFIED_SENDER_EMAIL || "maryanne_galo@outlook.com",
      subject: `Portfolio Website Contact: Message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; border: 1px solid #e0e0e0; border-radius: 5px;">
          <h2 style="color: #6b46c1;">New Website Contact Message</h2>
          <p><strong>From:</strong> ${name}</p>
          <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
          <p><strong>Message:</strong></p>
          <div style="background-color: #f9f9f9; padding: 15px; border-radius: 4px;">
            ${message.replace(/\n/g, "<br>")}
          </div>
        </div>
      `,
      replyTo: email,
    };

    // Send email via SendGrid
    await sgMail.send(emailContent);

    // Return success response
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error sending email:", error);

    const recipient =
      process.env.EMAIL_RECIPIENT || "maryanne.galo.readonly@gmail.com";
    const errorMessage = `Failed to send email. Please check your internet connection or email me directly at '${recipient}'.`;

    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
}
