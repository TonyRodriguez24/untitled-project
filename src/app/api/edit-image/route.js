// app/api/edit-image/route.js

import { NextResponse } from "next/server";
import OpenAI from "openai";
import { toFile } from "openai";
import fs from "fs/promises";
import path from "path";
import os from "os";

export async function POST(req) {
  const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

  try {
    const formData = await req.formData();
    const file = formData.get("image");
    const prompt = formData.get("prompt");

    if (!file || !prompt) {
      return NextResponse.json({ error: "Missing image or prompt" }, { status: 400 });
    }

    // Save uploaded file to temp folder
    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);
    const tempDir = os.tmpdir();
    const tempFilePath = path.join(tempDir, file.name);
    await fs.writeFile(tempFilePath, buffer);

    const imageFile = await toFile(tempFilePath);

    const response = await openai.images.edit({
      image: imageFile,
      prompt: prompt,
      model: "dall-e-2"
    });

    // Clean up temp file
    await fs.unlink(tempFilePath);

    const imageUrl = response.data[0].url;

    return NextResponse.json({ imageUrl });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Something went wrong" }, { status: 500 });
  }
}
