import React from "react";
import Image from "next/image";
import ConactImage from "../assets/images.png";
import Link from "next/link";

type MemberCardsProps = {
  userId: string;
  username: string;
};

const MemberCards = ({ userId, username }: MemberCardsProps) => {
  return (
    <div className="h-72 w-64 rounded cursor-pointer bg-emerald-300 overflow-hidden">
      <Image
        src={ConactImage}
        alt="Picture of Member"
        width={500}
        height={500}
        className="h-48 object-cover"
      />

      <p className="text-lg mx-2 my-4 ">
        Username:
        <span className="font-semibold underline">
          <Link href={`/Members/${userId}`}>{username}</Link>
        </span>
      </p>
    </div>
  );
};

export default MemberCards;
