import AppShell from '@/app/components/AppShell';

export const metadata = {
  title: 'Casa do Ingresso - Sistema Staff'
}

export default function PerfilPage(){
  return (
    <AppShell title="Profile">
      <div className="card max-w-xl">
        <div className="font-semibold mb-2">User</div>
        <div className="text-sm text-gray-600">Coming soon: logged in user data and change password.</div>
      </div>
    </AppShell>
  );
}
