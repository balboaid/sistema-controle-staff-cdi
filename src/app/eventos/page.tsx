import AppShell from '@/app/components/AppShell';

export const metadata = {
  title: 'Casa do Ingresso - Sistema Staff'
}

export default function EventosPage(){
  return (
    <AppShell title="Event Registration">
      <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input className="input" placeholder="Event" />
        <input className="input" placeholder="Contractor" />
        <input className="input" placeholder="Date" />
        <select className="input"><option>Day of Week</option></select>
        <input className="input" placeholder="Location" />
        <select className="input"><option>Event Type</option><option>Shows</option><option>Sports</option></select>
        <div className="col-span-full"><button className="btn" type="button">Register (MVP)</button></div>
      </form>
      <h2 className="text-xl font-semibold mt-8 mb-2">Registered Events</h2>
      <div className="table"><table className="w-full"><thead><tr className="bg-gray-50"><th className="th">Contractor</th><th className="th">Event</th><th className="th">Date</th></tr></thead><tbody><tr><td className="td">—</td><td className="td">—</td><td className="td">—</td></tr></tbody></table></div>
    </AppShell>
  );
}
