import React from "react";
import Header from "../Others/Header";
import TaskBox from "../Others/TaskBox";

const EmpDashboard = () => {
  return (
    <div className="container ">
      <Header />
      <TaskBox />
      <div
        id="taskList"
        className="mt-4 w-100  overflow-x-auto p-2 flex-nowrap d-flex justify-content-start align-items-center"
      >
        <div className="task mx-2 flex-shrink-0 bg-warning rounded-3"></div>
        <div className="task mx-2 flex-shrink-0 bg-warning rounded-3"></div>
        <div className="task mx-2 flex-shrink-0 bg-warning rounded-3"></div>
        <div className="task mx-2 flex-shrink-0 bg-warning rounded-3"></div>
        <div className="task mx-2 flex-shrink-0 bg-warning rounded-3"></div>
        <div className="task mx-2 flex-shrink-0 bg-warning rounded-3"></div>
        <div className="task mx-2 flex-shrink-0 bg-warning rounded-3"></div>
        <div className="task mx-2 flex-shrink-0 bg-warning rounded-3"></div>
      </div>
    </div>
  );
};

export default EmpDashboard;
