import "./App.css";
import Login from "./Component/Auth/Login";
import AdminDashboard from "./Component/Dashboard/AdminDashboard";
import EmpDashboard from "./Component/Dashboard/EmpDashboard";

function App() {
  return (
    <>
      <Login />
      <EmpDashboard />
      <AdminDashboard />
    </>
  );
}

export default App;
