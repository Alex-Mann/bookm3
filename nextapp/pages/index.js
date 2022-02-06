import { useState } from "react";
import Head from "next/head";
import { useMoralis } from "react-moralis";
import CopyURL from "../src/components/copyURL";
import Nav from "../src/components/nav";
import Link from "next/link";

export default function Home() {
  const { isAuthenticated, user } = useMoralis();

  return (
    <div
      className={`min-h-screen ${
        !isAuthenticated && "bg-login bg-cover bg-center overflow-hidden"
      }`}
    >
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav isAuthenticated={isAuthenticated} />
      <div className="flex flex-col items-center justify-center py-2">
        {isAuthenticated ? (
          <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
            <Link href="/me">
              <button className="button__box !mt-20">My Meetings</button>
            </Link>
            <div className="font-bold pt-48 pb-2 underline decoration-8 decoration-[#B4AAD0]">
              My invite URL: localhost:3000/{user.get("ethAddress")}
            </div>
            <CopyURL />
          </main>
        ) : (
          <div className="login__shadow absolute bottom-1/2 text-3xl text-white font-bold">
            pls login
          </div>
        )}
      </div>
    </div>
  );
}
