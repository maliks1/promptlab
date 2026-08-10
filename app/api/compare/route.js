import { NextResponse } from "next/server";
import { callGemini } from "@/lib/gemini";

export async function POST(req) {
  const { a, b, apiKey, model, temperature } = await req.json();
  const key = apiKey || process.env.GEMINI_API_KEY;
  if (!key) return NextResponse.json({ error: "Isi Gemini API Key dulu." }, { status: 400 });
  try {
    const [outA, outB] = await Promise.all([
      callGemini(key, model, a, temperature),
      callGemini(key, model, b, temperature),
    ]);
    return NextResponse.json({ a: outA, b: outB });
  } catch (e) {
    return NextResponse.json({ error: e.message }, { status: 500 });
  }
}