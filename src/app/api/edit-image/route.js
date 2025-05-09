import { NextResponse } from "next/server";

export async function POST(request) {
    // 1️⃣ parse the incoming multipart/form-data
    const formData = await request.formData();
    const file = formData.get("file");       // this is a File/Blob
    const prompt = formData.get("prompt");   // this is your text

    if (!(file instanceof Blob) || !prompt) {
        return NextResponse.json(
            { error: "Missing file or prompt" },
            { status: 400 }
        );
    }

    // 2️⃣ build a new FormData for the OpenAI API
    const out = new FormData();
    out.append("model", "gpt-image-1");
    out.append("prompt", prompt);
    // you can pass the File/Blob directly
    out.append("image", file, file.name);

    // 3️⃣ call OpenAI’s image-edits endpoint
    const aiRes = await fetch("https://api.openai.com/v1/images/edits", {
        method: "POST",
        headers: {
            Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
        },
        body: out,
    });

    if (!aiRes.ok) {
        const errText = await aiRes.text();
        console.error("OpenAI error:", errText);
        return NextResponse.json(
            { error: "OpenAI API request failed" },
            { status: 502 }
        );
    }

    const aiJson = await aiRes.json();
    // the API returns an array of images; grab the first
    const { b64_json } = aiJson.data[0];

    // 4️⃣ send that base64 blob back to your frontend
    return NextResponse.json({ b64_json });
}
