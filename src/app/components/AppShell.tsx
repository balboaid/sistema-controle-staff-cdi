"use client";
import Sidebar from '@/app/components/Sidebar';
import Navbar from '@/app/components/Navbar';

export default function AppShell({ title, children }: { title: string, children: React.ReactNode }){
  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />
      <main className="flex-1">
        <Navbar />
        <div className="p-6">
          <div className="text-sm text-gray-500 mb-6">Painel &gt; {title}</div>
          <h1 className="text-2xl font-bold mb-4 text-black">{title}</h1>
          {children}
        </div>
      </main>
    </div>
  );
}
