import React, { useContext } from "react";
import Header from "../Others/Header";
import TaskBox from "../Others/TaskBox";
import TaskLists from "../Others/TaskLists";
import { authContext } from "../../Context/ContextProvider";

const EmpDashboard = ({ data }) => {
  // const data = useContext(authContext);
  console.log(data);

  return (
    <div className="container ">
      <Header data={data} />
      <TaskBox data={data} />
      <TaskLists data={data} />
    </div>
  );
};

export default EmpDashboard;
