"use client";
import { useRouter } from "next/navigation";
import LogoutIcon from '@mui/icons-material/Logout';
import SearchIcon from '@mui/icons-material/Search';
import { signOut } from "next-auth/react";

export default function Navbar(){
  const router = useRouter();

  function handleLogout() {
    signOut({ callbackUrl: "/login" }); // This will clear the JWT session and redirect
  }

  return (
    <header className="w-full border-b bg-white pl-3 pt-5 pb-5">
      <div className="mx-auto max-w-8xl px-4 py-3 flex items-center justify-between">
        <div className="font-semibold text-black">Sistema Controle Staff CDI</div>
        <div className="flex items-center gap-3">
          <input className="input w-160 border-1 border-gray-500" placeholder="Buscar..." />
          <button className="btn max-w-35 mr-18"><SearchIcon className="mr-2" />Pesquisar</button>
          <div className="w-10 h-10 rounded-full bg-gray-200 border-[#66666650] border-1" />
          <button className="btn-secondary max-w-30" onClick={handleLogout}><LogoutIcon className="mr-2 pb-0.5" />Sair</button>
        </div>
      </div>
    </header>
  );
}
