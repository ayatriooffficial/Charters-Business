import { NextResponse } from "next/server";
import askBot from "@/lib/bot/askBot";

export async function POST(req: Request) {
  try {
    const { message } = await req.json();
    const reply = await askBot(message);

    return NextResponse.json({
      reply: String(reply)
    });
  } catch (err: any) {
    return NextResponse.json({
      reply: "Please contact our counselor for more details."
    });
  }
}