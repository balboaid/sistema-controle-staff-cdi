"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const items = [
  { href: "/", label: "Visão Geral", icon: "🏠" },
  { href: "/operacional", label: "Operacional", icon: "👤" },
  { href: "/parceiros", label: "Parceiros", icon: "🤝" },
  { href: "/eventos", label: "Eventos", icon: "🎉" },
  { href: "/cruzamentos", label: "Cruzamentos", icon: "📊" },
  { href: "/perfil", label: "Perfil", icon: "🪪" },
];

export default function Sidebar(){
  const pathname = usePathname();
  return (
    <aside className="w-64 min-h-screen bg-cdiBlue text-white p-4">
      <div className="font-bold text-lg mb-6">✖ CASA DO INGRESSO</div>
      <nav className="space-y-1">
        {items.map(i => (
          <Link key={i.href} href={i.href} className={`block px-3 py-2 rounded ${pathname===i.href? "bg-white/20" : "hover:bg-white/10"}`}>{i.icon} <span className="ml-2">{i.label}</span></Link>
        ))}
        <a className="block px-3 py-2 rounded hover:bg-white/10" href="https://casadoingresso.com" target="_blank">↗ Site Oficial</a>
      </nav>
    </aside>
  );
}
