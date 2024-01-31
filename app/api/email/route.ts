import { Resend } from "resend";
import AvocadoEmail from "@/app/emails/Avocado";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function GET() {
  try {
    const data = await resend.emails.send({
      from: "email@mail.avocado.dev",
      to: "hubertle43100@gmail.com",
      subject: "Hello World",
      react: AvocadoEmail(),
    });
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({
      status: "UMM...",
    });
  }
}
