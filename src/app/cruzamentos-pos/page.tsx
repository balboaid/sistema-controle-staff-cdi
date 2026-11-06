import AppShell from '@/app/components/AppShell';

export const metadata = {
  title: 'Casa do Ingresso - Sistema Staff'
}

export default function CruzamentosPage(){
  return (
    <AppShell title="Cross-references">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="space-y-3">
          <select className="input"><option>Event</option></select>
          <select className="input"><option>Location</option></select>
          <div><div className="text-sm font-medium mb-1">Event Type</div><label className="block text-sm"><input type="checkbox" className="mr-2" /> Shows</label></div>
          <select className="input"><option>Day of Week</option></select>
          <select className="input"><option>Period</option><option>Night</option><option>Afternoon</option><option>Morning</option></select>
        </div>
        <div className="md:col-span-3">
          <div className="card">
            <div className="font-semibold mb-3">0 results found (MVP)</div>
            <div className="table"><table className="w-full"><thead><tr className="bg-gray-50"><th className="th">Name</th><th className="th">Position</th><th className="th w-56">Actions</th></tr></thead><tbody><tr><td className="td">—</td><td className="td">—</td><td className="td">—</td></tr></tbody></table></div>
          </div>
        </div>
      </div>
    </AppShell>
  );
}
