import AppShell from '@/app/components/AppShell';

export const metadata = {
  title: 'Casa do Ingresso - Sistema Staff'
}

export default function PerfilPage(){
  return (
    <AppShell title="Perfil">
      <div className="card max-w-xl">
        <div className="font-semibold mb-2">Usuário</div>
        <div className="text-sm text-gray-600">Em breve: dados do usuário logado e alterar senha.</div>
      </div>
    </AppShell>
  );
}
