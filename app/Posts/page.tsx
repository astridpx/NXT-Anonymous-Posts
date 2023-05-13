import React from "react";
import Cards from "./Cards";
import { UserType } from "@/typins";

const GetPosts = async () => {
  try {
    const res = await fetch(`${process.env.API_URL}/users/all/posts`, {
      headers: {
        bearer: `${process.env.TOKEN}`,
      },
      // cache: "no-store",
      next: {
        revalidate: 10,
      },
    });

    const posts = await res.json();
    return posts;
  } catch (error) {
    console.log(error);
  }
};

export default async function PostsPage() {
  const posts: UserType[] = await GetPosts();

  return (
    <>
      <div className="bg-red-200 h-[90vh] overflow-y-auto">
        <div className=" overflow-y-auto bg-slate-400 p-4 gap-4 grid grid-cols-3">
          {/* cards */}
          {posts?.map((data) => {
            return data?.posts?.map((p) => {
              return (
                <Cards
                  key={p._id}
                  title={p.title}
                  content={p.content}
                  userId={data._id}
                  username={data.username}
                />
              );
            });
          })}
        </div>
      </div>
    </>
  );
}
