"use client";
import React, { useState } from "react";
import { signIn } from "next-auth/react";

const Page = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    await signIn("credentials", {
      username: username,
      password: password,
      redirect: false,
    });
  };
  return (
    <>
      <div className="h-[89vh] bg-green-100 flex items-center justify-center ">
        <form className="h-4/6 w-80 bg-slate-500 grid gap-y-3 p-4 rounded">
          <h1 className="text-center text-2xl font-bold">Login</h1>
          <input
            type="text"
            className="h-10"
            placeholder="Username"
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            className="h-10"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            type="submit"
            className="h-10 border-white border"
            onClick={(e) => handleSubmit(e)}
          >
            Login
          </button>
        </form>
      </div>
    </>
  );
};

export default Page;
