import { useEffect, useState } from "react";
import "./App.css";
import Login from "./Component/Auth/Login";
import AdminDashboard from "./Component/Dashboard/AdminDashboard";
import EmpDashboard from "./Component/Dashboard/EmpDashboard";
import { getLocalStorage, setLocalStorage } from "./utils/LocalStorage";

function App() {
  const [user, setUser] = useState(null);

  const handleLogin = (email, password) => {
    if (email === "admin@me.com" && password == "123") {
      console.log("hello admin");
      setUser("admin");
    } else if (email === "user@me.com" && password == "123") {
      console.log("hello User");
      setUser("employee");
    } else {
      alert("Invalid  Credentials");
    }
  };
  // handleLogin("user@me.com", 123);

  return (
    <>
      {!user && <Login openDashboard={handleLogin} />}
      {user == "admin" ? <AdminDashboard /> : <EmpDashboard />}
      {/* <Login /> */}
      {/* <EmpDashboard />
      <AdminDashboard /> */}
    </>
  );
}

export default App;
