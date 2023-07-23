import HeroScreenShot from "./HeroScreenShot";
import Pattern from "./Pattern";
import PrimaryButton from "./PrimaryButton";
import PrimaryCTA from "./PrimaryCTA";

export default function HeroSection() {
  return (
    <div className="relative isolate pt-14">
      <Pattern />
      <div className="mx-auto max-w-7xl px-6 py-10 sm:py-32 lg:flex lg:items-center lg:gap-x-10 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:flex-auto">
          <h1 className="mt-10 max-w-lg text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl dark:text-white">
            Sign up and start earning rewards, today!
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-white">
            Are you ready to embark on an exciting journey of rewards and
            referrals? Sign up now to unlock a world of possibilities! With our
            Referral Program, every step you take brings you closer to
            incredible rewards.
          </p>
          <div className="mt-10 flex items-center gap-x-6">
            <PrimaryCTA />
          </div>
        </div>
        <div className="mt-16 sm:mt-24 lg:mt-0 lg:flex-shrink-0 lg:flex-grow">
          <HeroScreenShot />
        </div>
      </div>
    </div>
  );
}
