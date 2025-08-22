import AppShell from '@/app/components/AppShell';
import Link from 'next/link';
import PeopleIcon from "@mui/icons-material/People";
import HandshakeIcon from "@mui/icons-material/Handshake";
import CelebrationIcon from "@mui/icons-material/Celebration";
import DataExplorationIcon from "@mui/icons-material/DataExploration";
import AccountBoxIcon from "@mui/icons-material/AccountBox";

export default function Home(){
  const tiles = [
    { href: '/operacional', label: 'Operacional', icon: <PeopleIcon fontSize="large" color="primary" /> },
    { href: '/parceiros', label: 'Parceiros', icon: <HandshakeIcon fontSize="large" color="primary" /> },
    { href: '/eventos', label: 'Eventos', icon: <CelebrationIcon fontSize="large" color="primary" /> },
    { href: '/cruzamentos', label: 'Cruzamentos', icon: <DataExplorationIcon fontSize="large" color="primary" /> },
    { href: '/perfil', label: 'Perfil', icon: <AccountBoxIcon fontSize="large" color="primary" /> },
  ];
  return (
    <AppShell title="Visão Geral">
      <div className="text-3xl text-black font-bold mb-10">Controle Staff <br /><span className="text-[#336BB3] text-3xl font-bold">Casa do Ingresso</span></div>
      <p className="text-md text-black mb-6">Selecione a função que deseja executar</p>
      <div className="grid max-w-220 h-100 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {tiles.map(t => (
          <Link key={t.href} href={t.href} className="card text-center hover:shadow-md">
            <div>
              <div className="mt-8 mb-3">{t.icon}</div>
              <div className="font-semibold text-black">{t.label}</div>
            </div>
          </Link>
        ))}
      </div>
    </AppShell>
  );
}
