// app/api/send-email/route.ts
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
export const dynamic = 'force-dynamic';
export async function POST(req: Request) {
    const { name, email, message } = await req.json();



    if (!name || !email || !message) {
        return NextResponse.json({ success: false, message: "Missing fields" }, { status: 400 });
    }

    try {
        const transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 587,
            secure: false,
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        await transporter.sendMail({
            from: email,
            to: process.env.EMAIL_TO, // your email
            subject: `Message from ${name}`,
            text: message,
            html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong><br/>${message}</p>
      `,
        });

        return NextResponse.json({ success: true, message: "Email sent successfully" });
    } catch (error) {
        console.error("Email error:", error);
        return NextResponse.json({ success: false, message: "Failed to send email" }, { status: 500 });
    }
}
