import { useAuth } from "../context/useAuth"; 

import { mockData } from "../data/mockData";

export default function CallLogs() {
  const { user } = useAuth();
  const calls = mockData[user.tenant].calls;

  return (
    <div>
      <h3>Call Logs</h3>
      {calls.length === 0 ? "No Calls" :
        calls.map((c) => (
          <div key={c.id}>
            {c.lead} | {c.time} | {c.duration} | {c.result}
          </div>
        ))}
    </div>
  );
}
