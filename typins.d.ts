export type PostsCardsType = {
  userId: string;
  username?: string;
  title: string;
  content: string;
};

export interface PostsType {
  title: string;
  content: string;
  date: string;
  _id: string;
}

export interface UserType {
  _id: string;
  username: string;
  posts: Posts[];
}

declare module "next-auth" {
  interface session {
    user: {
      id: string;
      name: string;
      accessToken: string;
    };
  }
}
