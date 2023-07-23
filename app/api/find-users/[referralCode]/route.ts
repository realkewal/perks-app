import { NextResponse } from "next/server";
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import { prisma } from "@/lib/prisma";

export async function GET(
  request: Request,
  { params }: { params: { referralCode: string } }
) {
  const session = await getServerSession(authOptions);
  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  console.log(params);
  const referralCode = params.referralCode;
  const user = await prisma.user.findMany({
    where: {
      referredBy: referralCode,
    },
    select: {
      createdAt: true,
      name: true,
    },
  });

  return NextResponse.json({ message: user }, { status: 200 });
}
