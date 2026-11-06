import AppShell from '@/app/components/AppShell';
import Link from 'next/link';
import PeopleIcon from "@mui/icons-material/People";
import HandshakeIcon from "@mui/icons-material/Handshake";
import CelebrationIcon from "@mui/icons-material/Celebration";
import DataExplorationIcon from "@mui/icons-material/DataExploration";
import AccountBoxIcon from "@mui/icons-material/AccountBox";

export const metadata = {
  title: 'Casa do Ingresso - Sistema Staff'
}

export default function Home(){
  const tiles = [
    { href: '/operacional', label: 'Operational', icon: <PeopleIcon fontSize="large" color="primary" /> },
    { href: '/parceiros', label: 'Partners', icon: <HandshakeIcon fontSize="large" color="primary" /> },
    { href: '/eventos', label: 'Events', icon: <CelebrationIcon fontSize="large" color="primary" /> },
    { href: '/cruzamentos', label: 'Cross-references', icon: <DataExplorationIcon fontSize="large" color="primary" /> },
    { href: '/perfil', label: 'Profile', icon: <AccountBoxIcon fontSize="large" color="primary" /> },
  ];
  return (
    <AppShell title="Overview">
      <div className="text-3xl text-black font-bold mb-10">Staff Control <br /><span className="text-[#336BB3] text-3xl font-bold">Casa do Ingresso</span></div>
      <p className="text-md text-black mb-6">Select the function you want to execute</p>
      <div className="grid max-w-220 h-100 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {tiles.map(t => (
          <Link key={t.href} href={t.href} className="card text-center">
            <div>
              <div className="mt-8 mb-3">{t.icon}</div>
              <div className="font-semibold text-black text-lg">{t.label}</div>
            </div>
          </Link>
        ))}
      </div>
    </AppShell>
  );
}
