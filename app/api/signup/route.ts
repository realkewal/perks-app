import * as referralCodes from "referral-codes";

import { NextResponse } from "next/server";
import { hash } from "bcryptjs";
import { prisma } from "@/lib/prisma";

export async function POST(req: Request) {
  try {
    const { name, email, password, referredBy } = (await req.json()) as {
      name: string;
      email: string;
      password: string;
      referredBy: string;
    };
    const hashed_password = await hash(password, 12);

    const user = await prisma.user.create({
      data: {
        name,
        email: email.toLowerCase(),
        password: hashed_password,
        referredBy: referredBy,
        referralCode: referralCodes.generate({ prefix: "promo-" }).pop(),
        credits: referredBy ? 100 : 0,
      },
    });

    console.log(user);

    if (user && referredBy) {
      await prisma.user.update({
        where: { referralCode: referredBy },
        data: {
          successfulConversions: { increment: 1 },
          credits: { increment: 100 },
        },
      });
    }

    return NextResponse.json({
      user: {
        name: user.name,
        email: user.email,
      },
    });
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
