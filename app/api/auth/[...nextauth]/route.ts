import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const authOptions: NextAuthOptions = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",

      credentials: {
        username: { label: "Username", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" },
      },

      async authorize(credentials, req) {
        const { username, password } = credentials as any;

        const res = await fetch("http://localhost:5000/users/login", {
          method: "POST",

          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username,
            password,
          }),
        });

        const user = await res.json();

        if (res.ok && user?.token) {
          console.log(user);
          return user;
        } else return null;
      },
    }),
  ],

  pages: {
    signIn: "/Login",
  },

  session: {
    strategy: "jwt",
  },
});

// export default NextAuth(authOptions);
export { authOptions as GET, authOptions as POST };
