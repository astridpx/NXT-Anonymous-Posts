import { Inter } from "next/font/google";
import { signIn } from "next-auth/react";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <div className="bg-teal-300 h-[89.5vh] flex justify-center items-center">
        <form action="" className="bg-red-400 p-4 w-2/4 h-max">
          <h1 className="text-center text-xl mb-4 font-semibold">Post Here!</h1>
          <div className="p-2 flex items-center ">
            <label htmlFor="title" className="font-semibold mr-4">
              Title
            </label>
            <input type="text" name="title" autoComplete="off" />
          </div>
          <div>
            <textarea
              placeholder="Write something"
              className="resize-none h-52 w-full p-2"
            ></textarea>

            <div className="w-full grid place-content-end">
              <button
                type="submit"
                className="bg-blue-300 px-6 py-1 font-semibold "
              >
                Post
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
