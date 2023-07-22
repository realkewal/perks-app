"use client";

import { signIn, signOut, useSession } from "next-auth/react";

export default function NavLoginLink() {
  const { data: session } = useSession();
  return (
    <>
      {session ? (
        <p>
          Welcome {session!.user!.name}!{" "}
          <span
            style={{ textDecoration: "underline", cursor: "pointer" }}
            onClick={() => signOut()}
          >
            Sign out
          </span>
        </p>
      ) : (
        <a
          href="/signin"
          className="text-sm font-semibold leading-6 text-gray-900 dark:text-white"
        >
          Log in <span aria-hidden="true">&rarr;</span>
        </a>
      )}
    </>
  );
}
