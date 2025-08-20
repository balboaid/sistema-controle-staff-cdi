import AppShell from '@/app/components/AppShell';

export default function ParceirosPage(){
  return (
    <AppShell title="Cadastro de Parceiros">
      <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input className="input" placeholder="Contratante" />
        <input className="input" placeholder="CNPJ" />
        <input className="input" placeholder="Endereço" />
        <input className="input" placeholder="Atividade" />
        <input className="input" placeholder="Nome Fantasia" />
        <input className="input" placeholder="Resp. Contrato" />
        <div className="flex items-center gap-3"><span>Contrato</span><label className="text-sm"><input type="radio" name="contrato" /> Sim</label><label className="text-sm"><input type="radio" name="contrato" /> Não</label></div>
        <div className="col-span-full"><button className="btn" type="button">Cadastrar (MVP)</button></div>
      </form>
      <h2 className="text-xl font-semibold mt-8 mb-2">Parceiros Cadastrados</h2>
      <div className="card">Sem dados (MVP)</div>
    </AppShell>
  );
}
