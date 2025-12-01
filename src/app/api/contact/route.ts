import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const send_from = process.env.CONTACT_FROM!;
const send_to = process.env.CONTACT_TO!;


type Mail = {
  name?: string;
  email?: string;
  message?: string;
};

// Email validation regex sourced from HTML Living Standard.
// References:
// - HTML spec: https://html.spec.whatwg.org/multipage/input.html#valid-e-mail-address
function isEmail(x: string) {
  return /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(x);
}


export async function POST(req: Request) {
  try {
    const { name, email, message } = (await req.json()) as Mail;

    // Basic validation
    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing required fields." }, { status: 400 });
    }
    if (!isEmail(email)) {
      return NextResponse.json({ error: "Invalid email." }, { status: 400 });
    }
    if (message.trim().length < 2) {
      return NextResponse.json({ error: "Message too short." }, { status: 400 });
    }

    // Send to you
    await resend.emails.send({
      from: send_from,     //Website Domain
      to: send_to,         //My Inbox
      subject: `Portfolio contact from ${name}`,
      replyTo: email,
      text: `From: ${name} <${email}>\n\n${message}`,
    });

    // Confirmation to sender
    await resend.emails.send({
      from: send_from,
      to: email,
      subject: "Thanks for reaching out to Gianni Cottone",
      text:
        `Hi ${name},\n\n` +
        `Thanks for contacting me through my portfolio site. I received your message and will get back to you soon.\n\n` +
        `— Gianni\n` +
        `giannicottone.dev`,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Contact route error:", err);
    return NextResponse.json({ error: "Failed to send email." }, { status: 500 });
  }
}
