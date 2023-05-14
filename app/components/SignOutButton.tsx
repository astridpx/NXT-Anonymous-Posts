"use client";
import React from "react";
import Link from "next/link";
import { signOut, useSession } from "next-auth/react";

const SignOutButton = () => {
  const { data: session } = useSession();

  if (session) {
    return (
      <>
        <button
          type="button"
          className="px-4 py-2 border border-white font-bold text-gray-200"
          onClick={() => signOut()}
        >
          Sign Out
        </button>
      </>
    );
  }

  return (
    <>
      <Link
        href="/Login"
        className="px-4 py-2 border border-white font-bold text-gray-200"
      >
        Login
      </Link>
    </>
  );
};

export default SignOutButton;
