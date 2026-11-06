import AppShell from '@/app/components/AppShell';

export const metadata = {
  title: 'Casa do Ingresso - Sistema Staff'
}

export default function OperacionalCadastradosPage(){
  return (
    <AppShell title="Operational">
      <div className="flex items-center justify-between mb-4">
        <input className="input max-w-md" placeholder="Search employee by name..." />
        <a href="/operacional/novo" className="btn">Register</a>
      </div>
      <div className="table">
        <table className="w-full">
          <thead><tr className="bg-gray-50"><th className="th">Name</th><th className="th">Position</th><th className="th w-56">Actions</th></tr></thead>
          <tbody><tr><td className="td">—</td><td className="td">—</td><td className="td">—</td></tr></tbody>
        </table>
      </div>
    </AppShell>
  );
}
