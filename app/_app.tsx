import { AppProps } from "next/app";
import { Session } from "next-auth";
import { SessionProvider } from "next-auth/react";

interface MyAppProps extends AppProps {
  pageProps: {
    session: Session | null;
  };
}

export default function App({ Component, pageProps }: MyAppProps) {
  const { session, ...restPageProps } = pageProps;

  return (
    <SessionProvider session={session}>
      <Component {...restPageProps} />
    </SessionProvider>
  );
}
