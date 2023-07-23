import { NextResponse } from "next/server";
import { User } from "@prisma/client";
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import { prisma } from "@/lib/prisma";

export async function PUT(req: Request) {
  const session = await getServerSession(authOptions);
  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  try {
    const { id, newData } = await req.json();
    const updatedUser: User | null = await prisma.user.update({
      where: { id },
      data: newData,
    });

    if (!updatedUser) {
      return NextResponse.json({ message: "User not found" });
    }
    return NextResponse.json({ updatedUser });
  } catch (error: any) {
    return new NextResponse(
      JSON.stringify({
        status: "error",
        message: error.message,
      }),
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
}
