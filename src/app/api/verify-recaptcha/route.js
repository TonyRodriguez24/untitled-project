import { NextResponse } from "next/server";

export async function POST(req) {
    try {
        const { token } = await req.json();

        if (!token) {
            return NextResponse.json({ error: "Missing token" }, { status: 400 });
        }

        const secretKey = process.env.RECAPTCHA_SECRET_KEY;

        const response = await fetch("https://www.google.com/recaptcha/api/siteverify", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: `secret=${secretKey}&response=${token}`,
        });

        const data = await response.json();

        if (data.success && data.score > 0.7) {
            return NextResponse.json({ success: true, score: data.score });
        } else {
            return NextResponse.json(
                { success: false, score: data.score, message: "Bot or invalid request" },
                { status: 400 }
            );
        }
    } catch (error) {
        console.error("reCAPTCHA verification failed:", error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}
