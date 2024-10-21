import React from "react";

const Header = () => {
  return (
    <div>
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h1 className="text-success">
          {" "}
          Hello ,<br />
          Azmat 👋
        </h1>
        <button className="btn btn-danger">Logout</button>
      </div>
    </div>
  );
};

export default Header;
