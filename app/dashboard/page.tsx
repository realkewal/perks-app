import Header from "@/components/dashboard/Header";
import ReferralList from "@/components/dashboard/ReferralList";
import ShareYourCode from "@/components/ShareYourCode";
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth/next";
import { prisma } from "@/lib/prisma";

export default async function Dashboard() {
  const session = await getServerSession(authOptions);
  const email = session?.user?.email;
  const userDetails = await prisma.user.findUnique({
    where: {
      email: email!,
    },
    select: {
      createdAt: true,
      name: true,
      referralCode: true,
      successfulConversions: true,
      credits: true,
    },
  });

  const referrals = await prisma.user.findMany({
    where: {
      referredBy: userDetails?.referralCode,
    },
    select: {
      createdAt: true,
      name: true,
      email: true,
    },
  });

  return (
    <>
      <div className="min-h-full bg-white">
        <Header />

        <div className="py-10">
          <header>
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <h1 className="text-3xl font-bold leading-tight tracking-tight text-gray-900">
                Dashboard
              </h1>
              <h3 className="text-gray-900 my-6">
                You have {userDetails?.credits} credits. Refer your mates to
                keep earning more.
              </h3>
              <div className="text-gray-900 my-8">
                Your uniqe referral code is{" "}
                <p className="text-green-600">{userDetails?.referralCode}</p>{" "}
              </div>

              <div className="py-4 bg-indigo-700 text-white rounded-md my-4 w-64">
                <ShareYourCode referralCode={userDetails?.referralCode!} />
              </div>
            </div>
          </header>
          <main>
            <div className="mx-auto max-w-7xl sm:px-6 lg:px-8 text-gray-900 px-4 text-left">
              <h4 className="text-2xl">Your referrals</h4>
              <ReferralList referrals={referrals} />
            </div>
          </main>
        </div>
      </div>
    </>
  );
}
