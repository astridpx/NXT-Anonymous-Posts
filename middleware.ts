export { default } from "next-auth/middleware";
// import { withAuth } from "next-auth/middleware";

// export default withAuth({
//   secret: process.env.JWT_SECRET,
// });

export const config = {
  matcher: ["/", "/Posts/:path*", "/Members/:path*"],
};
