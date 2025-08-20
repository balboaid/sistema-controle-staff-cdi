import AppShell from '@/app/components/AppShell';
import Link from 'next/link';

export default function Home(){
  const tiles = [
    { href: '/operacional', label: 'Operacional' },
    { href: '/parceiros', label: 'Parceiros' },
    { href: '/eventos', label: 'Eventos' },
    { href: '/cruzamentos', label: 'Cruzamentos' },
    { href: '/perfil', label: 'Perfil' },
  ];
  return (
    <AppShell title="Visão Geral">
      <div className="text-xl">Controle Staff <span className="text-cdiBlue font-bold">Casa do Ingresso</span></div>
      <p className="text-sm text-gray-500 mb-6">Selecione a função que deseja executar</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {tiles.map(t => (
          <Link key={t.href} href={t.href} className="card text-center hover:shadow-md">
            <div className="text-6xl mb-3">⬛️</div>
            <div className="font-semibold">{t.label}</div>
          </Link>
        ))}
      </div>
    </AppShell>
  );
}
