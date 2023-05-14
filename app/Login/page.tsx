"use client";
import React, { useEffect, useState } from "react";
import { signIn, signOut } from "next-auth/react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const Page = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | undefined>("");
  const { data: session } = useSession();
  const router = useRouter();

  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    const res = await signIn("credentials", {
      username: username,
      password: password,
      redirect: false,
      callbackUrl: "/Login",
    });

    if (res?.ok) {
      router.push("/");
    }
    setError(res?.error);
  };

  useEffect(() => {
    if (session) {
      router.push("/");
    }
  }, []);

  return (
    <>
      <div className="h-[89vh] bg-green-100 flex items-center justify-center ">
        <form className="h-4/6 w-80 bg-slate-500 grid gap-y-3 p-4 rounded">
          <h1 className="text-center text-2xl font-bold">
            {session ? "Logined" : "Login"}
          </h1>
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
            className="h-10 border-white border"
            onClick={(e) => handleSubmit(e)}
          >
            Login
          </button>

          {/* <button
            type="submit"
            className="h-10 border-white border"
            onClick={(e) => handleLogout(e)}
          >
            Sign Out
          </button> */}
          {error ? <p className=" text-red-300 text-center">{error}</p> : null}
        </form>
      </div>
    </>
  );
};

export default Page;
