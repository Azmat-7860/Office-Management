import React from "react";
import Header from "../Others/Header";
import TaskBox from "../Others/TaskBox";
import TaskLists from "../Others/TaskLists";

const EmpDashboard = () => {
  return (
    <div className="container ">
      <Header />
      <TaskBox />
      <TaskLists />
    </div>
  );
};

export default EmpDashboard;
