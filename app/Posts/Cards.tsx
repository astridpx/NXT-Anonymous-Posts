import React from "react";
import Link from "next/link";
import { PostsCardsType } from "@/typins";

// type CardsProps = {
//   userId: string;
//   username?: string;
//   title: string;
//   content: string;
// };

function Cards({ title, content, userId, username }: PostsCardsType) {
  return (
    <>
      <div className="h-80 w-full rounded cursor-pointer bg-emerald-300 overflow-auto p-4">
        <div className="mb-2 ">
          <Link
            href={`/Members/${userId}`}
            className="mx-2 text-lg text-gray-800 font-semibold underline"
          >
            {username}
          </Link>
        </div>
        <h1 className="font-bold text-lg text-center">{title}</h1>
        <article className="mt-4">
          <p>{content}</p>
        </article>
      </div>
    </>
  );
}

export default Cards;
