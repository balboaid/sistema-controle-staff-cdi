import AppShell from '@/app/components/AppShell';

export const metadata = {
  title: 'Casa do Ingresso - Sistema Staff'
}

export default function OperacionalPage(){
  return (
    <AppShell title="Operacional">
      <div className="flex items-center justify-between mb-4">
        <input className="input max-w-md" placeholder="Pesquisar colaborador por nome..." />
        <a href="/operacional/novo" className="btn">Cadastrar</a>
      </div>
      <div className="table">
        <table className="w-full">
          <thead><tr className="bg-gray-50"><th className="th">Nome</th><th className="th">Cargo</th><th className="th w-56">Ações</th></tr></thead>
          <tbody><tr><td className="td">—</td><td className="td">—</td><td className="td">—</td></tr></tbody>
        </table>
      </div>
    </AppShell>
  );
}
