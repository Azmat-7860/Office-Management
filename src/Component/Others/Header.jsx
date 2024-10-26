import React, { useContext } from "react";
import { authContext } from "../../Context/ContextProvider";

const Header = ({ data }) => {
  const { setPage } = useContext(authContext);
  const handleLogout = () => {
    setPage("login");
  };
  return (
    <div className=" container">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h1 className="text-success">
          {" "}
          Hello ,<br />
          {data.firstName}
        </h1>
        <button
          onClick={handleLogout}
          className="btn btn-outline-danger fw-bold"
        >
          Log Out
        </button>
      </div>
    </div>
  );
};

export default Header;
