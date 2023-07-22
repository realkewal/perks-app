import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(
  request: Request,
  { params }: { params: { referralCode: string } }
) {
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
