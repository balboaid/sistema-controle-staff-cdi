import { withAuth } from "next-auth/middleware";

export default withAuth({
  pages: {
    signIn: "/login", // para onde redirecionar se não estiver logado
  },
});

// Definir quais rotas precisam de proteção
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