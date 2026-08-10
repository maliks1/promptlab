export const META_IMPROVE = `Kamu adalah senior prompt engineer. Perbaiki prompt user menjadi prompt berkualitas tinggi.
Aturan:
1. Pahami intent asli, lalu tulis ulang dengan struktur:
# Role
# Context
# Task
# Constraints
# Output Format
2. Jangan mengubah tujuan asli user.
3. Akhiri dengan bagian '## Catatan Perubahan' berisi 3-5 poin singkat perbaikanmu.

Prompt user:
"""`;

export async function callGemini(key, model, prompt, temperature = 0.7) {
  const url = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${key}`;
  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      contents: [{ parts: [{ text: prompt }] }],
      generationConfig: { temperature },
    }),
  });
  if (!res.ok) throw new Error(`Gemini API ${res.status}: ${await res.text()}`);
  const data = await res.json();
  return data.candidates?.[0]?.content?.parts?.[0]?.text ?? "(tidak ada output)";
}