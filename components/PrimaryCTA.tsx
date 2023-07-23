"use client";

import { signIn, signOut, useSession } from "next-auth/react";

import PrimaryButton from "./PrimaryButton";

export default function PrimaryCTA() {
  const { data: session } = useSession();
  return (
    <>
      {session ? (
        <a href="/dashboard">
          <PrimaryButton buttonText={"Go to Dashboard"} />
        </a>
      ) : (
        <a href="/signup">
          <PrimaryButton buttonText={"Sign up"} />
        </a>
      )}
    </>
  );
}
