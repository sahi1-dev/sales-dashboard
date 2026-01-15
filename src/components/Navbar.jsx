import { useAuth } from "../context/useAuth";  


export default function Navbar() {
  const { user, setUser } = useAuth();

  return (
    <div style={{ padding: 10, background: "#e5e5e5" }}>
      Tenant:
      <select
        value={user.tenant}
        onChange={(e) => setUser({ ...user, tenant: e.target.value })}
      >
        <option value="orgA">Organization A</option>
        <option value="orgB">Organization B</option>
      </select>

      Role:
      <select
        value={user.role}
        onChange={(e) => setUser({ ...user, role: e.target.value })}
      >
        <option>Admin</option>
        <option>Agent</option>
      </select>
    </div>
  );
}
