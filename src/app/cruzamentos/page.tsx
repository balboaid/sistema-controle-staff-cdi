import AppShell from '@/app/components/AppShell';

export default function CruzamentosPage(){
  return (
    <AppShell title="Cruzamentos">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="space-y-3">
          <select className="input"><option>Evento</option></select>
          <select className="input"><option>Local</option></select>
          <div><div className="text-sm font-medium mb-1">Tipo de Evento</div><label className="block text-sm"><input type="checkbox" className="mr-2" /> Shows</label></div>
          <select className="input"><option>Dia da Semana</option></select>
          <select className="input"><option>Período</option><option>Noite</option><option>Tarde</option><option>Manhã</option></select>
        </div>
        <div className="md:col-span-3">
          <div className="card">
            <div className="font-semibold mb-3">0 resultados encontrados (MVP)</div>
            <div className="table"><table className="w-full"><thead><tr className="bg-gray-50"><th className="th">Nome</th><th className="th">Cargo</th><th className="th w-56">Ações</th></tr></thead><tbody><tr><td className="td">—</td><td className="td">—</td><td className="td">—</td></tr></tbody></table></div>
          </div>
        </div>
      </div>
    </AppShell>
  );
}
