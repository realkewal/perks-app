import SignOutLink from "./SignOutLink";
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth/next";

export default async function NavLoginLink() {
  // const { data: session } = useSession();

  const session = await getServerSession();
  return (
    <>
      {session ? (
        <>
          <p className="cursor-pointer ">Welcome {session!.user!.name}! </p>
          &nbsp;
          <a
            href="/dashboard"
            className="text-sm font-semibold leading-6 text-gray-900 dark:text-white"
          >
            Go to Dashboard <span aria-hidden="true">&rarr;</span>
          </a>
          &nbsp;
          <SignOutLink />
        </>
      ) : (
        <a
          href="/signin"
          className="text-sm font-semibold leading-6 text-gray-900 dark:text-white"
        >
          <p>
            {" "}
            Log in <span aria-hidden="true">&rarr;</span>
          </p>
        </a>
      )}
    </>
  );
}
