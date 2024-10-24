import { useContext, useEffect, useState } from "react";
import "./App.css";
import Login from "./Component/Auth/Login";
import AdminDashboard from "./Component/Dashboard/AdminDashboard";
import EmpDashboard from "./Component/Dashboard/EmpDashboard";
import { authContext } from "./Context/ContextProvider";

function App() {
  const [user, setUser] = useState(null);
  const authData = useContext(authContext);
  // console.log(authData.empData);

  useEffect(() => {
    if (authData) {
      const isLoggedIn = localStorage.getItem("loggedIn");
      if (isLoggedIn) {
        setUser(isLoggedIn.role);
      }
    }
  }, [authData]);

  const handleLogin = (email, password) => {
    if (email === "admin@me.com" && password == "123") {
      setUser("admin");
      localStorage.setItem("loggedIn", JSON.stringify({ role: "admin" }));
    } else if (email === "user@me.com" && password == "123") {
      setUser("employee");
      localStorage.setItem("loggedIn", JSON.stringify({ role: "employee" }));
    } else {
      alert("Invalid  Credentials");
    }
  };

  return (
    <>
      {!user && <Login openDashboard={handleLogin} />}
      {user == "admin" && <AdminDashboard />}
      {user == "employee" && <EmpDashboard />}
    </>
  );
}

export default App;
