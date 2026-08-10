import { NextResponse } from "next/server";
import { callGemini, META_IMPROVE } from "@/lib/gemini";

export async function POST(req) {
  const { prompt, apiKey, model, temperature } = await req.json();
  const key = apiKey || process.env.GEMINI_API_KEY;
  if (!key) return NextResponse.json({ error: "Isi Gemini API Key dulu." }, { status: 400 });
  try {
    const result = await callGemini(key, model, META_IMPROVE + prompt + '\n"""', temperature);
    return NextResponse.json({ result });
  } catch (e) {
    return NextResponse.json({ error: e.message }, { status: 500 });
  }
}