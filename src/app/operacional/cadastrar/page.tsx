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
  genero: z.enum(["Male", "Female"]),
  religiao: z.string().optional(),
  time: z.string().optional(),
  nomePai: z.string().optional(),
  nomeMae: z.string().optional(),
  conjuge: z.string().optional(),
  estadoCivil: z.string().optional(),
  filhos: z.enum(["Yes", "No"]),
  idadeFilhos: z.string().optional(),
  comorbidade: z.enum(["Yes", "No"]),
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
  dispViajar: z.enum(["Yes", "No"]),
  banco: z.string().optional(),
  agencia: z.string().optional(),
  conta: z.string().optional(),
  chavePix: z.string().optional(),
  cargo: z.string().optional(),
  contrato: z.enum(["Indefinite Term", "Fixed Term"]),
  documentos: z.array(z.string()).optional(),
  antecedentes: z.enum(["Yes", "No"]),
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
    console.log("Form submitted:", data);
    alert("Registration completed!");
  };

  return (
    <AppShell title="Operational > Register Employee">
      <div className="pt-5">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">

        {/* Personal Data */}
        <fieldset className="border border-gray-300 p-4 rounded">
          <legend className="font-semibold text-black">Personal Data</legend>
          <div className="grid grid-cols-[150px_minmax(600px,_1fr)] gap-4 mt-2">

            <label htmlFor="nome" className="text-black pt-2">Name</label>
            <input {...register("nome")} placeholder="Full name without abbreviation" className="border p-2 rounded" />

            <label htmlFor="cpf" className="text-black pt-2">CPF</label>
            <input {...register("cpf")} placeholder="Without dots and/or dashes" className="border p-2 rounded max-w-100" />

            <label htmlFor="rg" className="text-black pt-2">RG</label>
            <input {...register("rg")} placeholder="Without dots and/or dashes" className="border p-2 rounded max-w-100" />

            <label htmlFor="dataEmissao" className="text-black pt-2">Issue Date</label>
            <input {...register("dataEmissao")} placeholder="00/00/0000" className="border p-2 rounded max-w-50" />

            <label htmlFor="orgaoEmissor" className="text-black pt-2">Issuing Agency</label>
            <input {...register("orgaoEmissor")} placeholder="---" className="border p-2 rounded max-w-50" />

            <label htmlFor="naturalidade" className="text-black pt-2">Place of Birth</label>
            <input {...register("naturalidade")} placeholder="City" className="border p-2 rounded" />

            <label htmlFor="uf" className="text-black pt-2">State</label>
            <select {...register("uf")} className="border border-black p-2 rounded text-black ">
              <option value="">Select the state</option>
              <option value="AC">Acre</option>
              <option value="AL">Alagoas</option>
              <option value="AP">Amapá</option>
              <option value="AM">Amazonas</option>
              <option value="BA">Bahia</option>
              <option value="CE">Ceará</option>
              <option value="DF">Distrito Federal</option>
              <option value="ES">Holy Spirit</option>
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

            <label htmlFor="nacionalidade" className="text-black pt-2">Nationality</label>
            <select {...register("nacionalidade")} className="border border-black text-black p-2 rounded">
              <option value="">Select the country</option>
              <option value="Afghanistan">Afghanistan</option>
              <option value="South Africa">South Africa</option>
              <option value="Albania">Albania</option>
              <option value="Germany">Germany</option>
              <option value="Andorra">Andorra</option>
              <option value="Angola">Angola</option>
              <option value="Antigua and Barbuda">Antigua and Barbuda</option>
              <option value="Saudi Arabia">Saudi Arabia</option>
              <option value="Algeria">Algeria</option>
              <option value="Argentina">Argentina</option>
              <option value="Armenia">Armenia</option>
              <option value="Australia">Australia</option>
              <option value="Austria">Austria</option>
              <option value="Azerbaijan">Azerbaijan</option>
              <option value="Bahamas">Bahamas</option>
              <option value="Bangladesh">Bangladesh</option>
              <option value="Barbados">Barbados</option>
              <option value="Bahrain">Bahrain</option>
              <option value="Belgium">Belgium</option>
              <option value="Belize">Belize</option>
              <option value="Benin">Benin</option>
              <option value="Belarus">Belarus</option>
              <option value="Bolivia">Bolivia</option>
              <option value="Bosnia and Herzegovina">Bosnia and Herzegovina</option>
              <option value="Botswana">Botswana</option>
              <option value="Brazil">Brazil</option>
              <option value="Brunei">Brunei</option>
              <option value="Bulgaria">Bulgaria</option>
              <option value="Burkina Faso">Burkina Faso</option>
              <option value="Burundi">Burundi</option>
              <option value="Bhutan">Bhutan</option>
              <option value="Cape Verde">Cape Verde</option>
              <option value="Cameroon">Cameroon</option>
              <option value="Cambodia">Cambodia</option>
              <option value="Canada">Canada</option>
              <option value="Qatar">Qatar</option>
              <option value="Kazakhstan">Kazakhstan</option>
              <option value="Chad">Chad</option>
              <option value="Chile">Chile</option>
              <option value="China">China</option>
              <option value="Cyprus">Cyprus</option>
              <option value="Colombia">Colombia</option>
              <option value="Comoros">Comoros</option>
              <option value="Congo">Congo</option>
              <option value="North Korea">North Korea</option>
              <option value="South Korea">South Korea</option>
              <option value="Ivory Coast">Ivory Coast</option>
              <option value="Costa Rica">Costa Rica</option>
              <option value="Croatia">Croatia</option>
              <option value="Cuba">Cuba</option>
              <option value="Denmark">Denmark</option>
              <option value="Djibouti">Djibouti</option>
              <option value="Dominica">Dominica</option>
              <option value="Egypt">Egypt</option>
              <option value="El Salvador">El Salvador</option>
              <option value="United Arab Emirates">United Arab Emirates</option>
              <option value="Ecuador">Ecuador</option>
              <option value="Eritrea">Eritrea</option>
              <option value="Slovakia">Slovakia</option>
              <option value="Slovenia">Slovenia</option>
              <option value="Spain">Spain</option>
              <option value="United States">United States</option>
              <option value="Estonia">Estonia</option>
              <option value="Ethiopia">Ethiopia</option>
              <option value="Fiji">Fiji</option>
              <option value="Philippines">Philippines</option>
              <option value="Finland">Finland</option>
              <option value="France">France</option>
              <option value="Gabon">Gabon</option>
              <option value="Gambia">Gambia</option>
              <option value="Ghana">Ghana</option>
              <option value="Georgia">Georgia</option>
              <option value="Grenada">Grenada</option>
              <option value="Greece">Greece</option>
              <option value="Guatemala">Guatemala</option>
              <option value="Guyana">Guyana</option>
              <option value="Guinea">Guinea</option>
              <option value="Guinea-Bissau">Guinea-Bissau</option>
              <option value="Equatorial Guinea">Equatorial Guinea</option>
              <option value="Haiti">Haiti</option>
              <option value="Netherlands">Netherlands</option>
              <option value="Honduras">Honduras</option>
              <option value="Hungary">Hungary</option>
              <option value="Yemen">Yemen</option>
              <option value="Marshall Islands">Marshall Islands</option>
              <option value="India">India</option>
              <option value="Indonesia">Indonesia</option>
              <option value="Iran">Iran</option>
              <option value="Iraq">Iraq</option>
              <option value="Ireland">Ireland</option>
              <option value="Iceland">Iceland</option>
              <option value="Israel">Israel</option>
              <option value="Italy">Italy</option>
              <option value="Jamaica">Jamaica</option>
              <option value="Japan">Japan</option>
              <option value="Jordan">Jordan</option>
              <option value="Kiribati">Kiribati</option>
              <option value="Kosovo">Kosovo</option>
              <option value="Kuwait">Kuwait</option>
              <option value="Laos">Laos</option>
              <option value="Lesotho">Lesotho</option>
              <option value="Latvia">Latvia</option>
              <option value="Lebanon">Lebanon</option>
              <option value="Liberia">Liberia</option>
              <option value="Libya">Libya</option>
              <option value="Liechtenstein">Liechtenstein</option>
              <option value="Lithuania">Lithuania</option>
              <option value="Luxembourg">Luxembourg</option>
              <option value="Macedonia">Macedonia</option>
              <option value="Madagascar">Madagascar</option>
              <option value="Malaysia">Malaysia</option>
              <option value="Malawi">Malawi</option>
              <option value="Maldives">Maldives</option>
              <option value="Mali">Mali</option>
              <option value="Malta">Malta</option>
              <option value="Morocco">Morocco</option>
              <option value="Mauritius">Mauritius</option>
              <option value="Mauritania">Mauritania</option>
              <option value="Mexico">Mexico</option>
              <option value="Micronesia">Micronesia</option>
              <option value="Mozambique">Mozambique</option>
              <option value="Moldova">Moldova</option>
              <option value="Monaco">Monaco</option>
              <option value="Mongolia">Mongolia</option>
              <option value="Montenegro">Montenegro</option>
              <option value="Myanmar">Myanmar</option>
              <option value="Namibia">Namibia</option>
              <option value="Nauru">Nauru</option>
              <option value="Nepal">Nepal</option>
              <option value="Nicaragua">Nicaragua</option>
              <option value="Niger">Niger</option>
              <option value="Nigeria">Nigeria</option>
              <option value="Norway">Norway</option>
              <option value="New Zealand">New Zealand</option>
              <option value="Oman">Oman</option>
              <option value="Palau">Palau</option>
              <option value="Palestine">Palestine</option>
              <option value="Panama">Panama</option>
              <option value="Papua New Guinea">Papua New Guinea</option>
              <option value="Pakistan">Pakistan</option>
              <option value="Paraguay">Paraguay</option>
              <option value="Peru">Peru</option>
              <option value="Poland">Poland</option>
              <option value="Portugal">Portugal</option>
              <option value="Kenya">Kenya</option>
              <option value="Kyrgyzstan">Kyrgyzstan</option>
              <option value="United Kingdom">United Kingdom</option>
              <option value="Central African Republic">Central African Republic</option>
              <option value="Czech Republic">Czech Republic</option>
              <option value="Democratic Republic of the Congo">Democratic Republic of the Congo</option>
              <option value="Dominican Republic">Dominican Republic</option>
              <option value="Romania">Romania</option>
              <option value="Rwanda">Rwanda</option>
              <option value="Russia">Russia</option>
              <option value="Western Sahara">Western Sahara</option>
              <option value="Saint Kitts and Nevis">Saint Kitts and Nevis</option>
              <option value="Saint Vincent and the Grenadines">Saint Vincent and the Grenadines</option>
              <option value="Samoa">Samoa</option>
              <option value="San Marino">San Marino</option>
              <option value="Saint Lucia">Saint Lucia</option>
              <option value="São Tomé and Príncipe">São Tomé and Príncipe</option>
              <option value="Senegal">Senegal</option>
              <option value="Sierra Leone">Sierra Leone</option>
              <option value="Serbia">Serbia</option>
              <option value="Seychelles">Seychelles</option>
              <option value="Singapore">Singapore</option>
              <option value="Syria">Syria</option>
              <option value="Somalia">Somalia</option>
              <option value="Sri Lanka">Sri Lanka</option>
              <option value="Eswatini">Eswatini</option>
              <option value="Sudan">Sudan</option>
              <option value="South Sudan">South Sudan</option>
              <option value="Sweden">Sweden</option>
              <option value="Switzerland">Switzerland</option>
              <option value="Suriname">Suriname</option>
              <option value="Thailand">Thailand</option>
              <option value="Taiwan">Taiwan</option>
              <option value="Tajikistan">Tajikistan</option>
              <option value="Tanzania">Tanzania</option>
              <option value="Timor-Leste">Timor-Leste</option>
              <option value="Togo">Togo</option>
              <option value="Tonga">Tonga</option>
              <option value="Trinidad and Tobago">Trinidad and Tobago</option>
              <option value="Tunisia">Tunisia</option>
              <option value="Turkmenistan">Turkmenistan</option>
              <option value="Turkey">Turkey</option>
              <option value="Tuvalu">Tuvalu</option>
              <option value="Ukraine">Ukraine</option>
              <option value="Uganda">Uganda</option>
              <option value="Uruguay">Uruguay</option>
              <option value="Uzbekistan">Uzbekistan</option>
              <option value="Vanuatu">Vanuatu</option>
              <option value="Vatican">Vatican</option>
              <option value="Venezuela">Venezuela</option>
              <option value="Vietnam">Vietnam</option>
              <option value="Zambia">Zambia</option>
              <option value="Zimbabwe">Zimbabwe</option>
            </select>

            <label htmlFor="dataNascimento" className="text-black pt-2">Date of Birth</label>
            <input {...register("dataNascimento")} placeholder="00/00/0000" className="border p-2 rounded max-w-50" />

            <label htmlFor="genero" className="text-black pt-2">Gender</label>
            <div className="flex gap-4">
              <label className="flex items-center">
                <input type="radio" {...register("genero")} value="Male" className="mr-2" />
                <p className="text-black">Male</p>
              </label>
              <label className="flex items-center">
                <input type="radio" {...register("genero")} value="Female" className="mr-2" />
                <p className="text-black">Female</p>
              </label>
            </div>

            <label htmlFor="religiao" className="text-black pt-2">Religion</label>
            <select {...register("religiao")} className="border p-2 rounded text-black">
              <option value="">Select the religion</option>
              <option value="Agnostic">Agnostic</option>
              <option value="Atheist">Atheist</option>
              <option value="Buddhist">Buddhist</option>
              <option value="Candomblé">Candomblé</option>
              <option value="Catholic">Catholic</option>
              <option value="Spiritist">Spiritist</option>
              <option value="Evangelical">Evangelical</option>
              <option value="Hindu">Hindu</option>
              <option value="Islam">Islam</option>
              <option value="Jewish">Jewish</option>
              <option value="Mormon">Mormon</option>
              <option value="Muslim">Muslim</option>
              <option value="Protestant">Protestant</option>
              <option value="Rastafarian">Rastafarian</option>
              <option value="African Matrix Religion">African Matrix Religion</option>
              <option value="Indigenous Matrix Religion">Indigenous Matrix Religion</option>
              <option value="Sikhism">Sikhism</option>
              <option value="Taoism">Taoism</option>
              <option value="Theism">Theism</option>
              <option value="Jehovah's Witness">Jehovah's Witness</option>
              <option value="Umbanda">Umbanda</option>
              <option value="Zoroastrianism">Zoroastrianism</option>
              <option value="Other">Other</option>
            </select>

            <label htmlFor="time" className="text-black pt-2">Favorite Team</label>
            <select {...register("time")} className="border p-2 rounded text-black">
              <option value="">Select the team</option>
              <option value="Atlético Mineiro">Atlético Mineiro</option>
              <option value="Athletico Paranaense">Athletico Paranaense</option>
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
              <option value="Red Bull Bragantino">Red Bull Bragantino</option>
              <option value="Santos">Santos</option>
              <option value="São Paulo">São Paulo</option>
              <option value="Vasco da Gama">Vasco da Gama</option>
              <option value="Vitória">Vitória</option>
              <option value="Other">Other</option>
            </select>

            <label htmlFor="nomePai" className="text-black pt-2">Father's Name</label>
            <input {...register("nomePai")} placeholder="Full name without abbreviation" className="border p-2 rounded" />

            <label htmlFor="nomeMae" className="text-black pt-2">Mother's Name</label>
            <input {...register("nomeMae")} placeholder="Full name without abbreviation" className="border p-2 rounded" />

            <label htmlFor="conjuge" className="text-black pt-2">Spouse</label>
            <input {...register("conjuge")} placeholder="Spouse's full name without abbreviation" className="border p-2 rounded" />

            <label htmlFor="filhos" className="text-black pt-2">Do you have children?</label>
            <div className="flex gap-4">
              <label className="flex items-center">
                <input type="radio" {...register("filhos")} value="Yes" className="mr-2" />
                <p className="text-black">Yes</p>
              </label>
              <label className="flex items-center">
                <input type="radio" {...register("filhos")} value="No" className="mr-2" />
                <p className="text-black">No</p>
              </label>
            </div>

            <label htmlFor="estadoCivil" className="text-black pt-2">Marital Status</label>
            <select {...register("estadoCivil")} className="border p-2 rounded text-black">
              <option value="">Select marital status</option>
              <option value="Single">Single</option>
              <option value="Married">Married</option>
              <option value="Domestic Partnership">Domestic Partnership</option>
              <option value="Separated">Separated</option>
              <option value="Divorced">Divorced</option>
              <option value="Widowed">Widowed</option>
            </select>

          </div>
        </fieldset>

        {/* Bank Data */}
        <fieldset className="border border-gray-300 p-4 rounded">
          <legend className="font-semibold text-black">Bank Data</legend>
          <div className="grid grid-cols-3 gap-4 mt-2">
            <input {...register("banco")} placeholder="Bank" className="border p-2 rounded" />
            <input {...register("agencia")} placeholder="Branch" className="border p-2 rounded" />
            <input {...register("conta")} placeholder="Account" className="border p-2 rounded" />
            <input {...register("chavePix")} placeholder="Pix Key" className="border p-2 rounded col-span-3" />
          </div>
        </fieldset>

        {/* Nature of Relationship */}
        <fieldset className="border border-gray-300 p-4 rounded">
          <legend className="font-semibold text-black">Nature and Purpose of Relationship</legend>
          <div className="grid grid-cols-2 gap-4 mt-2">
            <input {...register("cargo")} placeholder="Position" className="border p-2 rounded" />
            <select {...register("contrato")} className="border p-2 rounded">
              <option value="Indefinite Term">Indefinite Term</option>
              <option value="Fixed Term">Fixed Term</option>
            </select>
          </div>
        </fieldset>

        {/* Documents */}
        <fieldset className="border border-gray-300 p-4 rounded">
          <legend className="font-semibold text-black">Documents</legend>
          <label className="flex gap-2">
            <input type="checkbox" value="CPF" {...register("documentos")} /> <p className="text-black">CPF</p>
          </label>
          <label className="flex gap-2">
            <input type="checkbox" value="RG" {...register("documentos")} /> <p className="text-black">RG</p>
          </label>
          <label className="flex gap-2">
            <input type="checkbox" value="Proof of Residence" {...register("documentos")} /> <p className="text-black">Proof of Residence</p>
          </label>
        </fieldset>

        {/* Criminal Record */}
        <fieldset className="border border-gray-300 p-4 rounded">
          <legend className="font-semibold text-black">Criminal Record</legend>
          <label className="flex gap-2">
            <input type="radio" value="Yes" {...register("antecedentes")} /> <p className="text-black">Yes</p>
          </label>
          <label className="flex gap-2">
            <input type="radio" value="No" {...register("antecedentes")} /> <p className="text-black">No</p>
          </label>
        </fieldset>

        <div>
          <input {...register("dataCadastro")} placeholder="Registration Date" className="border p-2 rounded" />
        </div>

        <button type="submit" className="bg-black text-white px-4 py-2 rounded">
          Register
        </button>
      </form>
    </div>
    </AppShell>
  );
}
