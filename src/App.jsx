import { useContext, useEffect, useState } from "react";
import "./App.css";
import Login from "./Component/Auth/Login";
import AdminDashboard from "./Component/Dashboard/AdminDashboard";
import EmpDashboard from "./Component/Dashboard/EmpDashboard";
import { authContext } from "./Context/ContextProvider";
import { setLocalStorage } from "./utils/LocalStorage";

function App() {
  useEffect(() => {
    localStorage.removeItem("employee");
    localStorage.removeItem("admin");
    setLocalStorage();
  }, []);

  const { authData, page, setPage } = useContext(authContext);
  console.log(authData);

  const [loggedInUser, setLoggedInUser] = useState(null);
  const [loggedInAdmin, setLoggedInAdmin] = useState(null);

  const handleLogin = (email, password) => {
    if (authData) {
      const loggedAdm = authData.adminData.find(
        (data) => data.email === email && data.password === password
      );
      if (loggedAdm) {
        setPage("admin");
        setLoggedInAdmin(loggedAdm);
        return;
      }
      const loggedEmp = authData.empData.find(
        (data) => data.email === email && data.password === password
      );
      if (loggedEmp) {
        setPage("employee");
        setLoggedInUser(loggedEmp);
        return;
      }
    }
    alert("Invalid Credentials");
  };

  return (
    <>
      {page == "login" && <Login openDashboard={handleLogin} />}
      {page == "admin" && <AdminDashboard data={loggedInAdmin} />}
      {page == "employee" && <EmpDashboard data={loggedInUser} />}
    </>
  );
}

export default App;
