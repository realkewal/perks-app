import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(request: Request) {
  const user = await prisma.user.findUnique({
    where: {
      email: "hello@iamkewal.com",
    },
  });

  return NextResponse.json({ message: user }, { status: 200 });
}
