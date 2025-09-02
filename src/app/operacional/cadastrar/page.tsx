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
            <input {...register("orgaoEmissor")} placeholder="---" className="border p-2 rounded max-w-50" />

            <label htmlFor="naturalidade" className="text-black pt-2">Naturalidade</label>
            <input {...register("naturalidade")} placeholder="Cidade" className="border p-2 rounded" />

            <label htmlFor="uf" className="text-black pt-2">UF</label>
            <select {...register("uf")} className="border border-black p-2 rounded text-black ">
              <option value="">Selecione o estado</option>
              <option value="AC">Acre</option>
              <option value="AL">Alagoas</option>
              <option value="AP">Amapá</option>
              <option value="AM">Amazonas</option>
              <option value="BA">Bahia</option>
              <option value="CE">Ceará</option>
              <option value="DF">Distrito Federal</option>
              <option value="ES">Espírito Santo</option>
              <option value="GO">Goiás</option>
              <option value="MA">Maranhão</option>
              <option value="MT">Mato Grosso</option>
              <option value="MS">Mato Grosso do Sul</option>
              <option value="MG">Minas Gerais</option>
              <option value="PA">Pará</option>
              <option value="PB">Paraíba</option>
              <option value="PR">Paraná</option>
              <option value="PE">Pernambuco</option>
              <option value="PI">Piauí</option>
              <option value="RJ">Rio de Janeiro</option>
              <option value="RN">Rio Grande do Norte</option>
              <option value="RS">Rio Grande do Sul</option>
              <option value="RO">Rondônia</option>
              <option value="RR">Roraima</option>
              <option value="SC">Santa Catarina</option>
              <option value="SP">São Paulo</option>
              <option value="SE">Sergipe</option>
              <option value="TO">Tocantins</option>
            </select>

            <label htmlFor="nacionalidade" className="text-black pt-2">Nacionalidade</label>
            <select {...register("nacionalidade")} className="border border-black text-black p-2 rounded">
              <option value="">Selecione o país</option>
              <option value="Afeganistão">Afeganistão</option>
              <option value="África do Sul">África do Sul</option>
              <option value="Albânia">Albânia</option>
              <option value="Alemanha">Alemanha</option>
              <option value="Andorra">Andorra</option>
              <option value="Angola">Angola</option>
              <option value="Antígua e Barbuda">Antígua e Barbuda</option>
              <option value="Arábia Saudita">Arábia Saudita</option>
              <option value="Argélia">Argélia</option>
              <option value="Argentina">Argentina</option>
              <option value="Armênia">Armênia</option>
              <option value="Austrália">Austrália</option>
              <option value="Áustria">Áustria</option>
              <option value="Azerbaijão">Azerbaijão</option>
              <option value="Bahamas">Bahamas</option>
              <option value="Bangladesh">Bangladesh</option>
              <option value="Barbados">Barbados</option>
              <option value="Bahrein">Bahrein</option>
              <option value="Bélgica">Bélgica</option>
              <option value="Belize">Belize</option>
              <option value="Benin">Benin</option>
              <option value="Bielorrússia">Bielorrússia</option>
              <option value="Bolívia">Bolívia</option>
              <option value="Bósnia e Herzegovina">Bósnia e Herzegovina</option>
              <option value="Botsuana">Botsuana</option>
              <option value="Brasil">Brasil</option>
              <option value="Brunei">Brunei</option>
              <option value="Bulgária">Bulgária</option>
              <option value="Burkina Faso">Burkina Faso</option>
              <option value="Burundi">Burundi</option>
              <option value="Butão">Butão</option>
              <option value="Cabo Verde">Cabo Verde</option>
              <option value="Camarões">Camarões</option>
              <option value="Camboja">Camboja</option>
              <option value="Canadá">Canadá</option>
              <option value="Catar">Catar</option>
              <option value="Cazaquistão">Cazaquistão</option>
              <option value="Chade">Chade</option>
              <option value="Chile">Chile</option>
              <option value="China">China</option>
              <option value="Chipre">Chipre</option>
              <option value="Colômbia">Colômbia</option>
              <option value="Comores">Comores</option>
              <option value="Congo">Congo</option>
              <option value="Coreia do Norte">Coreia do Norte</option>
              <option value="Coreia do Sul">Coreia do Sul</option>
              <option value="Costa do Marfim">Costa do Marfim</option>
              <option value="Costa Rica">Costa Rica</option>
              <option value="Croácia">Croácia</option>
              <option value="Cuba">Cuba</option>
              <option value="Dinamarca">Dinamarca</option>
              <option value="Djibuti">Djibuti</option>
              <option value="Dominica">Dominica</option>
              <option value="Egito">Egito</option>
              <option value="El Salvador">El Salvador</option>
              <option value="Emirados Árabes Unidos">Emirados Árabes Unidos</option>
              <option value="Equador">Equador</option>
              <option value="Eritreia">Eritreia</option>
              <option value="Eslováquia">Eslováquia</option>
              <option value="Eslovênia">Eslovênia</option>
              <option value="Espanha">Espanha</option>
              <option value="Estados Unidos">Estados Unidos</option>
              <option value="Estônia">Estônia</option>
              <option value="Etiópia">Etiópia</option>
              <option value="Fiji">Fiji</option>
              <option value="Filipinas">Filipinas</option>
              <option value="Finlândia">Finlândia</option>
              <option value="França">França</option>
              <option value="Gabão">Gabão</option>
              <option value="Gâmbia">Gâmbia</option>
              <option value="Gana">Gana</option>
              <option value="Geórgia">Geórgia</option>
              <option value="Granada">Granada</option>
              <option value="Grécia">Grécia</option>
              <option value="Guatemala">Guatemala</option>
              <option value="Guiana">Guiana</option>
              <option value="Guiné">Guiné</option>
              <option value="Guiné-Bissau">Guiné-Bissau</option>
              <option value="Guiné Equatorial">Guiné Equatorial</option>
              <option value="Haiti">Haiti</option>
              <option value="Holanda">Holanda</option>
              <option value="Honduras">Honduras</option>
              <option value="Hungria">Hungria</option>
              <option value="Iémen">Iémen</option>
              <option value="Ilhas Marshall">Ilhas Marshall</option>
              <option value="Índia">Índia</option>
              <option value="Indonésia">Indonésia</option>
              <option value="Irã">Irã</option>
              <option value="Iraque">Iraque</option>
              <option value="Irlanda">Irlanda</option>
              <option value="Islândia">Islândia</option>
              <option value="Israel">Israel</option>
              <option value="Itália">Itália</option>
              <option value="Jamaica">Jamaica</option>
              <option value="Japão">Japão</option>
              <option value="Jordânia">Jordânia</option>
              <option value="Kiribati">Kiribati</option>
              <option value="Kosovo">Kosovo</option>
              <option value="Kuwait">Kuwait</option>
              <option value="Laos">Laos</option>
              <option value="Lesoto">Lesoto</option>
              <option value="Letônia">Letônia</option>
              <option value="Líbano">Líbano</option>
              <option value="Libéria">Libéria</option>
              <option value="Líbia">Líbia</option>
              <option value="Liechtenstein">Liechtenstein</option>
              <option value="Lituânia">Lituânia</option>
              <option value="Luxemburgo">Luxemburgo</option>
              <option value="Macedônia">Macedônia</option>
              <option value="Madagáscar">Madagáscar</option>
              <option value="Malásia">Malásia</option>
              <option value="Malawi">Malawi</option>
              <option value="Maldivas">Maldivas</option>
              <option value="Mali">Mali</option>
              <option value="Malta">Malta</option>
              <option value="Marrocos">Marrocos</option>
              <option value="Maurícia">Maurícia</option>
              <option value="Mauritânia">Mauritânia</option>
              <option value="México">México</option>
              <option value="Micronésia">Micronésia</option>
              <option value="Moçambique">Moçambique</option>
              <option value="Moldávia">Moldávia</option>
              <option value="Mônaco">Mônaco</option>
              <option value="Mongólia">Mongólia</option>
              <option value="Montenegro">Montenegro</option>
              <option value="Myanmar">Myanmar</option>
              <option value="Namíbia">Namíbia</option>
              <option value="Nauru">Nauru</option>
              <option value="Nepal">Nepal</option>
              <option value="Nicarágua">Nicarágua</option>
              <option value="Níger">Níger</option>
              <option value="Nigéria">Nigéria</option>
              <option value="Noruega">Noruega</option>
              <option value="Nova Zelândia">Nova Zelândia</option>
              <option value="Omã">Omã</option>
              <option value="Palau">Palau</option>
              <option value="Palestina">Palestina</option>
              <option value="Panamá">Panamá</option>
              <option value="Papua-Nova Guiné">Papua-Nova Guiné</option>
              <option value="Paquistão">Paquistão</option>
              <option value="Paraguai">Paraguai</option>
              <option value="Peru">Peru</option>
              <option value="Polônia">Polônia</option>
              <option value="Portugal">Portugal</option>
              <option value="Quênia">Quênia</option>
              <option value="Quirguistão">Quirguistão</option>
              <option value="Reino Unido">Reino Unido</option>
              <option value="República Centro-Africana">República Centro-Africana</option>
              <option value="República Checa">República Checa</option>
              <option value="República Democrática do Congo">República Democrática do Congo</option>
              <option value="República Dominicana">República Dominicana</option>
              <option value="Romênia">Romênia</option>
              <option value="Ruanda">Ruanda</option>
              <option value="Rússia">Rússia</option>
              <option value="Saara Ocidental">Saara Ocidental</option>
              <option value="Saint Kitts e Nevis">Saint Kitts e Nevis</option>
              <option value="Saint Vincent e Granadinas">Saint Vincent e Granadinas</option>
              <option value="Samoa">Samoa</option>
              <option value="San Marino">San Marino</option>
              <option value="Santa Lúcia">Santa Lúcia</option>
              <option value="São Tomé e Príncipe">São Tomé e Príncipe</option>
              <option value="Senegal">Senegal</option>
              <option value="Serra Leoa">Serra Leoa</option>
              <option value="Sérvia">Sérvia</option>
              <option value="Seychelles">Seychelles</option>
              <option value="Singapura">Singapura</option>
              <option value="Síria">Síria</option>
              <option value="Somália">Somália</option>
              <option value="Sri Lanka">Sri Lanka</option>
              <option value="Suazilândia">Suazilândia</option>
              <option value="Sudão">Sudão</option>
              <option value="Sudão do Sul">Sudão do Sul</option>
              <option value="Suécia">Suécia</option>
              <option value="Suíça">Suíça</option>
              <option value="Suriname">Suriname</option>
              <option value="Tailândia">Tailândia</option>
              <option value="Taiwan">Taiwan</option>
              <option value="Tajiquistão">Tajiquistão</option>
              <option value="Tanzânia">Tanzânia</option>
              <option value="Timor-Leste">Timor-Leste</option>
              <option value="Togo">Togo</option>
              <option value="Tonga">Tonga</option>
              <option value="Trinidad e Tobago">Trinidad e Tobago</option>
              <option value="Tunísia">Tunísia</option>
              <option value="Turcomenistão">Turcomenistão</option>
              <option value="Turquia">Turquia</option>
              <option value="Tuvalu">Tuvalu</option>
              <option value="Ucrânia">Ucrânia</option>
              <option value="Uganda">Uganda</option>
              <option value="Uruguai">Uruguai</option>
              <option value="Uzbequistão">Uzbequistão</option>
              <option value="Vanuatu">Vanuatu</option>
              <option value="Vaticano">Vaticano</option>
              <option value="Venezuela">Venezuela</option>
              <option value="Vietnã">Vietnã</option>
              <option value="Zâmbia">Zâmbia</option>
              <option value="Zimbábue">Zimbábue</option>
            </select>

            <label htmlFor="dataNascimento" className="text-black pt-2">Data de Nascimento</label>
            <input {...register("dataNascimento")} placeholder="00/00/0000" className="border p-2 rounded max-w-50" />

            <label htmlFor="religiao" className="text-black pt-2">Religião</label>
            <select {...register("religiao")} className="border p-2 rounded text-black">
              <option value="">Selecione a religião</option>
              <option value="Agnóstico">Agnóstico</option>
              <option value="Ateu">Ateu</option>
              <option value="Budista">Budista</option>
              <option value="Candomblé">Candomblé</option>
              <option value="Católico">Católico</option>
              <option value="Espírita">Espírita</option>
              <option value="Evangélico">Evangélico</option>
              <option value="Hinduísta">Hinduísta</option>
              <option value="Islamismo">Islamismo</option>
              <option value="Judeu">Judeu</option>
              <option value="Mórmon">Mórmon</option>
              <option value="Muçulmano">Muçulmano</option>
              <option value="Protestante">Protestante</option>
              <option value="Rastafári">Rastafári</option>
              <option value="Religião de Matriz Africana">Religião de Matriz Africana</option>
              <option value="Religião de Matriz Indígena">Religião de Matriz Indígena</option>
              <option value="Sikhismo">Sikhismo</option>
              <option value="Taoísmo">Taoísmo</option>
              <option value="Teísmo">Teísmo</option>
              <option value="Testemunha de Jeová">Testemunha de Jeová</option>
              <option value="Umbanda">Umbanda</option>
              <option value="Zoroastrismo">Zoroastrismo</option>
              <option value="Outra">Outra</option>
            </select>

            <label htmlFor="time" className="text-black pt-2">Time que torce</label>
            <select {...register("time")} className="border p-2 rounded text-black">
              <option value="">Selecione o time</option>
              <option value="Atlético Mineiro">Atlético Mineiro</option>
              <option value="Atlético Paranaense">Athletico Paranaense</option>
              <option value="Bahia">Bahia</option>
              <option value="Botafogo">Botafogo</option>
              <option value="Corinthians">Corinthians</option>
              <option value="Coritiba">Coritiba</option>
              <option value="Cruzeiro">Cruzeiro</option>
              <option value="Cuiabá">Cuiabá</option>
              <option value="Flamengo">Flamengo</option>
              <option value="Fluminense">Fluminense</option>
              <option value="Fortaleza">Fortaleza</option>
              <option value="Grêmio">Grêmio</option>
              <option value="Internacional">Internacional</option>
              <option value="Juventude">Juventude</option>
              <option value="Palmeiras">Palmeiras</option>
              <option value="Bragantino">Red Bull Bragantino</option>
              <option value="Santos">Santos</option>
              <option value="São Paulo">São Paulo</option>
              <option value="Vasco da Gama">Vasco da Gama</option>
              <option value="Vitória">Vitória</option>
              <option value="Outro">Outro</option>
            </select>

            <label htmlFor="nomePai" className="text-black pt-2">Nome do Pai</label>
            <input {...register("nomePai")} placeholder="Completo sem abreviação" className="border p-2 rounded" />

            <label htmlFor="nomeMae" className="text-black pt-2">Nome da Mãe</label>
            <input {...register("nomeMae")} placeholder="Completo sem abreviação" className="border p-2 rounded" />

            <label htmlFor="conjuge" className="text-black pt-2">Cônjuge</label>
            <input {...register("conjuge")} placeholder="Completo sem abreviação" className="border p-2 rounded" />

            <label htmlFor="estadoCivil" className="text-black pt-2">Estado Civil</label>
            <select {...register("estadoCivil")} className="border p-2 rounded text-black">
              <option value="">Selecione o estado civil</option>
              <option value="Solteiro">Solteiro(a)</option>
              <option value="Casado">Casado(a)</option>
              <option value="União Estável">União Estável</option>
              <option value="Separado">Separado(a)</option>
              <option value="Divorciado">Divorciado(a)</option>
              <option value="Viúvo">Viúvo(a)</option>
            </select>

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
