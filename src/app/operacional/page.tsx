import AppShell from '@/app/components/AppShell';
import Link from 'next/link';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import PersonSearchIcon from '@mui/icons-material/PersonSearch';

export const metadata = {
  title: 'Casa do Ingresso - Sistema Staff'
}

export default function OperacionalPage(){
  const tiles = [
    { href: '/operacional/cadastrar', label: 'Cadastrar Colaborador', icon: <PersonAddAlt1Icon fontSize="large" color="primary" /> },
    { href: '/operacional/cadastrados', label: 'Lista de Colaboradores', icon: <PersonSearchIcon fontSize="large" color="primary" /> }
  ];
  return (
    <AppShell title="Operacional">
      <p className="text-md text-black mb-6">Selecione entre as opções abaixo:</p>
      <div className="grid max-w-220 h-50 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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
