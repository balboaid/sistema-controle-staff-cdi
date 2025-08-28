'use client';
import { useEffect } from 'react';
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import AppShell from '@/app/components/AppShell';

const schema = z.object({
  nome: z.string().min(3),
  cpf: z.string(),
  rg: z.string(),
  dataEmissao: z.string().optional(),
  orgaoEmissor: z.string().optional(),
  naturalidade: z.string().optional(),
  uf: z.string().optional(),
  nacionalidade: z.string().optional(),
  dataNascimento: z.string().optional(),
  genero: z.enum(["Masculino", "Feminino"]),
  religiao: z.string().optional(),
  time: z.string().optional(),
  nomePai: z.string().optional(),
  nomeMae: z.string().optional(),
  conjuge: z.string().optional(),
  estadoCivil: z.string().optional(),
  filhos: z.enum(["Sim", "Não"]),
  idadeFilhos: z.string().optional(),
  comorbidade: z.enum(["Sim", "Não"]),
  qualComorbidade: z.string().optional(),
  cep: z.string().optional(),
  endereco: z.string().optional(),
  numero: z.string().optional(),
  complemento: z.string().optional(),
  telefone: z.string().optional(),
  contatoExtra: z.string().optional(),
  email: z.string().optional(),
  formacao: z.string().optional(),
  clt: z.enum(["Sim", "Não"]),
  profissao: z.string().optional(),
  tempoProfissao: z.string().optional(),
  dispViajar: z.enum(["Sim", "Não"]),
  banco: z.string().optional(),
  agencia: z.string().optional(),
  conta: z.string().optional(),
  chavePix: z.string().optional(),
  cargo: z.string().optional(),
  contrato: z.enum(["Prazo Indeterminado", "Prazo Determinado"]),
  documentos: z.array(z.string()).optional(),
  antecedentes: z.enum(["Sim", "Não"]),
  dataCadastro: z.string().optional(),
});

export default function OperacionalCadastrarPage(){
  useEffect(() => {
    document.title = 'Casa do Ingresso - Sistema Staff';
  }, []);

  const { register, handleSubmit } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: z.infer<typeof schema>) => {
    console.log("Formulário enviado:", data);
    alert("Cadastro realizado!");
  };

  return (
    <AppShell title="Operacional > Cadastrar Colaborador">
      <div className="pt-5">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">

        {/* Dados Pessoais */}
        <fieldset className="border border-gray-300 p-4 rounded">
          <legend className="font-semibold text-black">Dados Pessoais</legend>
          <div className="grid grid-cols-[150px_minmax(600px,_1fr)] gap-4 mt-2">

            <label htmlFor="nome" className="text-black pt-2">Nome</label>
            <input {...register("nome")} placeholder="Completo sem abreviação" className="border p-2 rounded" />

            <label htmlFor="cpf" className="text-black pt-2">CPF</label>
            <input {...register("cpf")} placeholder="Sem pontos e/ou traços" className="border p-2 rounded max-w-100" />
            
            <label htmlFor="rg" className="text-black pt-2">RG</label>
            <input {...register("rg")} placeholder="Sem pontos e/ou traços" className="border p-2 rounded max-w-100" />

            <label htmlFor="dataEmissao" className="text-black pt-2">Data de Emissão</label>
            <input {...register("dataEmissao")} placeholder="00/00/0000" className="border p-2 rounded max-w-50" />

            <label htmlFor="orgaoEmissor" className="text-black pt-2">Órgão Emissor</label>
            <input {...register("orgaoEmissor")} placeholder="---" className="border p-2 rounded" />

            <input {...register("naturalidade")} placeholder="Naturalidade" className="border p-2 rounded" />
            <input {...register("uf")} placeholder="UF" className="border p-2 rounded" />
            <input {...register("nacionalidade")} placeholder="Nacionalidade" className="border p-2 rounded" />
            <input {...register("dataNascimento")} placeholder="Data de Nascimento" className="border p-2 rounded" />
            <input {...register("religiao")} placeholder="Religião" className="border p-2 rounded" />
            <input {...register("time")} placeholder="Time que torce" className="border p-2 rounded" />
            <input {...register("nomePai")} placeholder="Nome do Pai" className="border p-2 rounded" />
            <input {...register("nomeMae")} placeholder="Nome da Mãe" className="border p-2 rounded" />
            <input {...register("conjuge")} placeholder="Cônjuge" className="border p-2 rounded" />
            <input {...register("estadoCivil")} placeholder="Estado Civil" className="border p-2 rounded" />
          </div>
        </fieldset>

        {/* Dados Bancários */}
        <fieldset className="border border-gray-300 p-4 rounded">
          <legend className="font-semibold text-black">Dados Bancários</legend>
          <div className="grid grid-cols-3 gap-4 mt-2">
            <input {...register("banco")} placeholder="Banco" className="border p-2 rounded" />
            <input {...register("agencia")} placeholder="Agência" className="border p-2 rounded" />
            <input {...register("conta")} placeholder="Conta" className="border p-2 rounded" />
            <input {...register("chavePix")} placeholder="Chave Pix" className="border p-2 rounded col-span-3" />
          </div>
        </fieldset>

        {/* Natureza da Relação */}
        <fieldset className="border border-gray-300 p-4 rounded">
          <legend className="font-semibold text-black">Natureza e Propósito da Relação</legend>
          <div className="grid grid-cols-2 gap-4 mt-2">
            <input {...register("cargo")} placeholder="Cargo" className="border p-2 rounded" />
            <select {...register("contrato")} className="border p-2 rounded">
              <option value="Prazo Indeterminado">Prazo Indeterminado</option>
              <option value="Prazo Determinado">Prazo Determinado</option>
            </select>
          </div>
        </fieldset>

        {/* Documentos */}
        <fieldset className="border border-gray-300 p-4 rounded">
          <legend className="font-semibold text-black">Documentos</legend>
          <label className="flex gap-2">
            <input type="checkbox" value="CPF" {...register("documentos")} /> <p className="text-black">CPF</p>
          </label>
          <label className="flex gap-2">
            <input type="checkbox" value="RG" {...register("documentos")} /> <p className="text-black">RG</p>
          </label>
          <label className="flex gap-2">
            <input type="checkbox" value="Comprovante de Residência" {...register("documentos")} /> <p className="text-black">Comprovante de Residência</p>
          </label>
        </fieldset>

        {/* Antecedentes */}
        <fieldset className="border border-gray-300 p-4 rounded">
          <legend className="font-semibold text-black">Antecedentes Criminais</legend>
          <label className="flex gap-2">
            <input type="radio" value="Sim" {...register("antecedentes")} /> <p className="text-black">Sim</p>
          </label>
          <label className="flex gap-2">
            <input type="radio" value="Não" {...register("antecedentes")} /> <p className="text-black">Não</p>
          </label>
        </fieldset>

        <div>
          <input {...register("dataCadastro")} placeholder="Data do Cadastro" className="border p-2 rounded" />
        </div>

        <button type="submit" className="bg-black text-white px-4 py-2 rounded">
          Cadastrar
        </button>
      </form>
    </div>
    </AppShell>
  );
}
