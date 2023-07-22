import { NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";

type ConnectionStatus = {
  isConnected: boolean;
};

async function getConnectionStatus(): Promise<ConnectionStatus> {
  try {
    await clientPromise;
    return {
      isConnected: true,
    };
  } catch (e) {
    console.error(e);
    return {
      isConnected: false,
    };
  }
}

export async function GET(request: Request) {
  const { isConnected } = await getConnectionStatus();

  if (!isConnected) {
    return NextResponse.json(
      {
        error:
          "Oops! Something went wrong. Please check your database connection.",
      },
      { status: 500 }
    );
  }
  return NextResponse.json(
    { message: "You're connected to the database." },
    { status: 200 }
  );
}
