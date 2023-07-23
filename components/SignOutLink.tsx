"use client";

import { signOut } from "next-auth/react";
export default function SignOutLink() {
  return (
    <p className="underline cursor-pointer mx-6" onClick={() => signOut()}>
      Sign out
    </p>
  );
}
