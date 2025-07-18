// import fs from "fs";
// import OpenAI, { toFile } from "openai";

import { NextResponse } from "next/server";

// const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export function GET() {
  return NextResponse.json({ message: "Nothing to see here" });
}




// export async function POST(req) {
//   try {
//     const formData = await req.formData();
//     const file = formData.get("image");
//     const prompt = formData.get("prompt");

//     console.log("Received prompt:", prompt);
//     console.log("Received file:", file);

//     if (!file || !prompt) {
//       console.warn("Missing file or prompt");
//       return new Response("Missing image or prompt", { status: 400 });
//     }

//     const image = await toFile(file, file.name, { type: file.type });
//     console.log("Converted file:", image);

//     const response = await openai.images.edit({
//       model: "gpt-image-1",
//       image,
//       prompt,
//       n: 1,
//       size: "1024x1024",
//     });

//     console.log("OpenAI response:", response);

//     return Response.json(response);
//   } catch (err) {
//     console.error("Server error:", err);
//     return new Response("Internal server error", { status: 500 });
//   }
// }
