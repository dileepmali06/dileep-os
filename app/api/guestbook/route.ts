import { NextRequest, NextResponse } from "next/server";

import { writeClient } from "@/sanity/lib/write-client";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const { name, email, message } = body;

    if (!name?.trim() || !message?.trim()) {
      return NextResponse.json(
        { error: "Name and message are required." },
        { status: 400 }
      );
    }

    const doc = {
      _type: "guestbook",
      name: name.trim(),
      email: email?.trim() || undefined,
      profession: body.profession?.trim() || undefined,
      company: body.company?.trim() || undefined,
      country: body.country?.trim() || undefined,
      website: body.website?.trim() || undefined,
      github: body.github?.trim() || undefined,
      linkedin: body.linkedin?.trim() || undefined,
      message: message.trim(),
      rating: body.rating || undefined,
      approved: false,
      featured: false,
      pinned: false,
      spam: false,
      source: "direct",
      createdAt: new Date().toISOString(),
    };

    const created = await writeClient.create(doc);

    return NextResponse.json({ success: true, id: created._id }, { status: 201 });
  } catch (error) {
    console.error("Guestbook submission failed:", error);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}