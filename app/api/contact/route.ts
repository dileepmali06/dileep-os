import { NextRequest, NextResponse } from "next/server";

import { sendContactEmail } from "@/lib/email/send-contact-email";
import { incrementContactStats } from "@/sanity/lib/increment-contact-stats";

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const getStr = (key: string) => (formData.get(key)?.toString() || "").trim();

    const name = getStr("name");
    const email = getStr("email");
    const message = getStr("message");

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email and message are required." },
        { status: 400 }
      );
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      return NextResponse.json(
        { error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    const contactType = getStr("contactType");

    const files = formData.getAll("attachments").filter((f): f is File => f instanceof File);
    const attachments = await Promise.all(
      files.map(async (file) => ({
        filename: file.name,
        content: Buffer.from(await file.arrayBuffer()),
      }))
    );

    const { data, error: resendError } = await sendContactEmail(
      {
        contactType,
        name,
        email,
        phone: getStr("phone"),
        company: getStr("company"),
        jobTitle: getStr("jobTitle"),
        website: getStr("website"),
        country: getStr("country"),
        city: getStr("city"),
        subject: getStr("subject"),
        service: getStr("service"),
        budget: getStr("budget"),
        timeline: getStr("timeline"),
        message,
      },
      attachments
    );

    if (resendError) {
      console.error("Resend failed to send email:", resendError);
      return NextResponse.json(
        { error: "Failed to send your message. Please try again or email me directly." },
        { status: 502 }
      );
    }

    await incrementContactStats(contactType);

    return NextResponse.json({ success: true, id: data?.id }, { status: 200 });
  } catch (error) {
    console.error("Failed to send contact email:", error);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}