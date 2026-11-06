import { withAuth } from "next-auth/middleware";

export default withAuth({
  pages: {
    signIn: "/login", // where to redirect if not logged in
  },
});

// Define which routes need protection
export const config = {
  matcher: [
    "/",
    "/operacional/:path*",
    "/parceiros/:path*",
    "/eventos/:path*",
    "/cruzamentos/:path*",
    "/perfil/:path*",
  ],
};