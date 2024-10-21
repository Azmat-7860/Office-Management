import React from "react";
import Header from "../Others/Header";
import CreateTask from "../Others/CreateTask";
import AllTask from "../Others/AllTask";

const AdminDashboard = () => {
  return (
    <>
      <Header />
      <CreateTask />
      <AllTask />
    </>
  );
};

export default AdminDashboard;
