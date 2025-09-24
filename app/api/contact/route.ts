import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const {
      subject = "New contact request",
      message,
      fullname,
      phonenumber,
      email,
      meta,
    } = await request.json();

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: Number(process.env.SMTP_PORT) === 465, // true for 465
      auth: {
        user: process.env.CONTACT_FROM,
        pass: process.env.SMTP_PASS,
      },
    });

    const details = [
      fullname ? `Full name: ${fullname}` : null,
      phonenumber ? `Phone: ${phonenumber}` : null,
      email ? `Email: ${email}` : null,
      message ? `Message: ${message}` : null,
    ]
      .filter(Boolean)
      .join("\n");

    const mailOptions = {
      from: process.env.CONTACT_FROM || process.env.SMTP_USER,
      to: process.env.SMTP_USER,
      subject,
      html: `
      <div style="font-family: Arial, sans-serif; line-height: 1.5; color: #333;">
        <h2>New Contact Request</h2>
        <table style="border-collapse: collapse; width: 100%;">
          <tr>
            <td style="padding: 8px; font-weight: bold;">Full Name:</td>
            <td style="padding: 8px;">${fullname || "N/A"}</td>
          </tr>
          <tr>
            <td style="padding: 8px; font-weight: bold;">Phone Number:</td>
            <td style="padding: 8px;">${phonenumber || "N/A"}</td>
          </tr>
          <tr>
            <td style="padding: 8px; font-weight: bold;">Email:</td>
            <td style="padding: 8px;">${email || "N/A"}</td>
          </tr>
          <tr>
            <td style="padding: 8px; font-weight: bold;">Message:</td>
            <td style="padding: 8px;">${message || "N/A"}</td>
          </tr>
          <tr>
            <td style="padding: 8px; font-weight: bold;">Date:</td>
            <td style="padding: 8px;">${new Date().toLocaleString()}</td>
          </tr>
        </table>
      </div>
    `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Email send failed", error);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}
