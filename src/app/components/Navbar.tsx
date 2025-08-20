"use client";
export default function Navbar(){
  return (
    <header className="w-full border-b bg-white">
      <div className="mx-auto max-w-8xl px-4 py-3 flex items-center justify-between">
        <div className="font-semibold text-black">Sistema Controle Staff CDI</div>
        <div className="flex items-center gap-3">
          <input className="input max-w-xs" placeholder="Buscar..." />
          <div className="w-8 h-8 rounded-full bg-gray-200" />
        </div>
      </div>
    </header>
  );
}
