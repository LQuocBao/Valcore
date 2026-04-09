import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(request: NextRequest) {
  try {
    const { name, phone, message } = await request.json();

    // Basic validation
    if (!name || !phone || !message) {
      return NextResponse.json(
        { error: "Vui lòng điền đầy đủ thông tin" },
        { status: 400 }
      );
    }

    // Save to database
    const contact = await prisma.contact.create({
      data: {
        name,
        phone,
        message,
      },
    });

    return NextResponse.json(
      { success: true, message: "Thông tin đã được lưu thành công!", data: contact },
      { status: 201 }
    );
  } catch (error) {
    console.error("Database Error:", error);
    return NextResponse.json(
      { error: `Lỗi Database: ${error instanceof Error ? error.message : String(error)}` },
      { status: 500 }
    );
  }
}
