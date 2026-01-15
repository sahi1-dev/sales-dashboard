import { useAuth } from "../context/useAuth";
import { mockData } from "../data/mockData";

export default function Leads() {
  const { user } = useAuth();
  const leads = mockData[user.tenant].leads;

  return (
    <div>
      <h3>Leads</h3>
      {leads.map((l) => (
        <div key={l.id}>
          {l.name} - {l.phone} - {l.status}
          {user.role === "Admin" && <button>Edit</button>}
        </div>
      ))}
    </div>
  );
}
