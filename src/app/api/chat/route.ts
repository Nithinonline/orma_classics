import { NextResponse } from "next/server";
import Groq from "groq-sdk";
import { knowledge } from "@/lib/knowledge";

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY!,
});

export async function POST(req: Request) {
  try {
    const { message } = await req.json();

    const completion = await groq.chat.completions.create({
      model: "llama-3.3-70b-versatile",

      messages: [
        {
          role: "system",
          content: knowledge,
        },
        {
          role: "user",
          content: message,
        },
      ],

      temperature: 0.2,
    });

    return NextResponse.json({
      reply: completion.choices[0].message.content,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json({
      reply:
        "Sorry, I'm unable to answer right now. Please try again later.",
    });
  }
}