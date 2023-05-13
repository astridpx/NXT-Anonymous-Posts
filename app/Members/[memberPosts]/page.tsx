import React from "react";
import PostsCard from "../../Posts/Cards";
import { UserType } from "@/typins";

type PageProps = {
  params: {
    memberPosts: string;
  };
};

const GetUserPosts = async (id: string) => {
  try {
    const res = await fetch(`${process.env.API_URL}/users/my/posts/${id}`, {
      cache: "no-store",
      next: {
        revalidate: 10,
      },
    });

    const myPosts = await res.json();
    return myPosts;
  } catch (error) {
    console.log(error);
  }
};

export default async function page({ params: { memberPosts } }: PageProps) {
  const userPosts: UserType = await GetUserPosts(memberPosts);

  return (
    <div className="h-[90vh] overflow-y-auto">
      <h1 className="py-4 font-bold text-lg text-gray-700">
        User :
        <span className="text-red-600 underline">{userPosts?.username}</span>
      </h1>
      <div className=" overflow-y-auto bg-slate-400 p-4 gap-4 grid grid-cols-3">
        {userPosts?.posts?.map((p) => {
          return (
            <PostsCard
              key={p._id}
              title={p.title}
              content={p.content}
              userId={userPosts._id}
              username={userPosts.username}
            />
          );
        })}
      </div>
    </div>
  );
}
