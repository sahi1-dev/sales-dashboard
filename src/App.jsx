import Navbar from "./components/Navbar";
import Leads from "./modules/Leads";
import CallLogs from "./modules/CallLogs";

function App() {
  return (
    <div className="container">
      <Navbar />
      <Leads />
      <CallLogs />
    </div>
  );
}

export default App;
