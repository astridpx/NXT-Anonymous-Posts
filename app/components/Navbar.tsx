import React from "react";
import Link from "next/link";

export default function Navbar() {
  return (
    <>
      <div className="grid grid-cols-2 items-center bg-blue-400 py-4">
        <h1 className="text-3xl text-gray-800 font-bold mx-4 ">
          Anonymous Post
        </h1>
        <div className="">
          <Link href="/" className="mx-2 text-lg text-gray-600 font-semibold ">
            Home
          </Link>
          <Link
            href="/Posts"
            className="mx-2 text-lg text-gray-600 font-semibold "
          >
            Posts
          </Link>
          <Link
            href="/Members"
            className="mx-2 text-lg text-gray-600 font-semibold "
          >
            Members
          </Link>
        </div>
      </div>
    </>
  );
}
