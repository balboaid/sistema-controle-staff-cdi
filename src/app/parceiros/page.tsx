import AppShell from '@/app/components/AppShell';

export const metadata = {
  title: 'Casa do Ingresso - Sistema Staff'
}

export default function ParceirosPage(){
  return (
    <AppShell title="Partner Registration">
      <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input className="input" placeholder="Contractor" />
        <input className="input" placeholder="CNPJ" />
        <input className="input" placeholder="Endereço" />
        <input className="input" placeholder="Atividade" />
        <input className="input" placeholder="Trade Name" />
        <input className="input" placeholder="Resp. Contrato" />
        <div className="flex items-center gap-3"><span>Contrato</span><label className="text-sm"><input type="radio" name="contrato" /> Sim</label><label className="text-sm"><input type="radio" name="contrato" /> Não</label></div>
        <div className="col-span-full"><button className="btn" type="button">Register (MVP)</button></div>
      </form>
      <h2 className="text-xl font-semibold mt-8 mb-2">Registered Partners</h2>
      <div className="card">No data (MVP)</div>
    </AppShell>
  );
}
