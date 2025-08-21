"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import HomeIcon from "@mui/icons-material/Home";
import PeopleIcon from "@mui/icons-material/People";
import HandshakeIcon from "@mui/icons-material/Handshake";
import CelebrationIcon from "@mui/icons-material/Celebration";
import DataExplorationIcon from "@mui/icons-material/DataExploration";
import DataSaverOnIcon from "@mui/icons-material/DataSaverOn";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import LaunchIcon from "@mui/icons-material/Launch";
import Image from "next/image";

const items = [
  { href: "/", label: "Visão Geral", icon: <HomeIcon /> },
  { href: "/operacional", label: "Operacional", icon: <PeopleIcon /> },
  { href: "/parceiros", label: "Parceiros", icon: <HandshakeIcon /> },
  { href: "/eventos", label: "Eventos", icon: <CelebrationIcon /> },
  { href: "/cruzamentos", label: "Cruzamento Consulta (Pós)", icon: <DataExplorationIcon /> },
  { href: "/cruzamentos", label: "Cruzamento Contratação (Pré)", icon: <DataSaverOnIcon /> },
  { href: "/perfil", label: "Perfil", icon: <AccountBoxIcon /> },
  { href: "https://casadoingresso.com", label: "Site Oficial", icon: <LaunchIcon /> },
];

export default function Sidebar(){
  const pathname = usePathname();
  return (
    <aside className="w-108 min-h-screen bg-cdiBlue text-white p-10">
      <div className="logoCDI">
        <Image src="/images/logo-Casa-do-Ingresso.svg" alt="Logo Casa do Ingresso" width={290} className="mb-10" height={21} />
      </div>
      <nav className="space-y-1">
        {items.map(i => (
          <Link key={i.href} href={i.href} className={`block px-3 py-2 rounded ${pathname===i.href? "bg-white/20" : "hover:bg-white/10"}`}>{i.icon} <span className="ml-2">{i.label}</span></Link>
        ))}
      </nav>
    </aside>
  );
}
