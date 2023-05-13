import React from "react";
import MemberCards from "./MemberCards";

interface Users {
  _id: string;
  username: string;
}

const GetAllUser = async () => {
  try {
    const res = await fetch(`${process.env.API_URL}/users`, {
      headers: {
        bearer: `${process.env.TOKEN}`,
      },
      // cache: "no-store",
      next: {
        revalidate: 10,
      },
    });

    const users = await res.json();
    return users;
  } catch (error) {
    console.log(error);
  }
};

export default async function MembersPage() {
  const users: Users[] = await GetAllUser();

  return (
    <div className="bg-red-200 h-[90vh] overflow-y-auto">
      <div className=" overflow-y-auto bg-slate-400 p-4 gap-4 grid grid-cols-4">
        {/* Cards */}
        {users?.map((user) => {
          return (
            <MemberCards
              key={user._id}
              userId={user._id}
              username={user.username}
            />
          );
        })}
      </div>
    </div>
  );
}
