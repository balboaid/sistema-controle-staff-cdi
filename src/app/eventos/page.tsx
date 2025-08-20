import AppShell from '@/app/components/AppShell';

export default function EventosPage(){
  return (
    <AppShell title="Cadastro de Eventos">
      <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input className="input" placeholder="Evento" />
        <input className="input" placeholder="Contratante" />
        <input className="input" placeholder="Data" />
        <select className="input"><option>Dia da Semana</option></select>
        <input className="input" placeholder="Local" />
        <select className="input"><option>Tipo de Evento</option><option>Shows</option><option>Esportes</option></select>
        <div className="col-span-full"><button className="btn" type="button">Cadastrar (MVP)</button></div>
      </form>
      <h2 className="text-xl font-semibold mt-8 mb-2">Eventos Cadastrados</h2>
      <div className="table"><table className="w-full"><thead><tr className="bg-gray-50"><th className="th">Contratante</th><th className="th">Evento</th><th className="th">Data</th></tr></thead><tbody><tr><td className="td">—</td><td className="td">—</td><td className="td">—</td></tr></tbody></table></div>
    </AppShell>
  );
}
