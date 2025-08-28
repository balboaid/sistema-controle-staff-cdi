'use client';
import { useState } from 'react';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import Image from "next/image";

export const metadata = {
  title: 'Casa do Ingresso - Sistema Staff'
}

export default function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await signIn('credentials', {
      redirect: false,
      username,
      password,
    });
    if (res && !res.error) {
      router.push('/');
    } else {
      alert('Usuário ou senha inválidos');
    }
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <form onSubmit={handleSubmit} className="bg-white p-10 rounded shadow-md w-110">
        <div className="logoCDI">
          <Image src="/images/logo-Casa-do-Ingresso-blue.svg" alt="Logo Casa do Ingresso" width={290} className="mb-10" height={21} />
        </div>
        <h1 className="text-4xl text-black font-bold mb-7">
          Login
        </h1>
        <label htmlFor="username" className="block text-lg font-medium text-gray-700 mb-2">
          Usuário
        </label>
        <input
          type="text"
          placeholder="Nome de Usuário"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          onFocus={(e) => e.target.placeholder = ''}
          className="border p-2 mb-3 w-full border-gray-400 bg-[#FCFCFC] mb-4"
        />
        <label htmlFor="password" className="block text-lg font-medium text-gray-700 mb-2">
          Senha
        </label>
        <input
          type="password"
          placeholder="&#9679;&#9679;&#9679;&#9679;&#9679;"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          onFocus={(e) => e.target.placeholder = ''}
          className="border p-2 mb-10 w-full border-gray-400 bg-[#FCFCFC] mb-4"
        />
        <button type="submit" className="bg-black text-white p-2 rounded w-full hover:bg-[#336BB4]">
          Entrar
        </button>
      </form>
    </div>
  );
}
