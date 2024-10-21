import React from "react";

const TaskBox = () => {
  const tasks = {
    completed: 10,
    failed: 3,
    new: 5,
    accepted: 7,
  };
  return (
    <div className="container">
      <div className="row row-cols-2 g-2">
        <div className="col">
          <div className="card bg-success  flex-grow-1">
            <p className=" ms-3 fs-2 fw-bold  text-white">{tasks.completed}</p>
            <h3 className=" ms-2 text-white">Completed</h3>
          </div>
        </div>

        <div className="col">
          <div className="card bg-danger">
            <p className=" ms-3 fs-2 fw-bold text-white">{tasks.failed}</p>
            <h3 className=" ms-2 text-white">Failed</h3>
          </div>
        </div>

        <div className="col">
          <div className="card bg-warning">
            <p className=" ms-3 fs-2 fw-bold  text-white">{tasks.new}</p>
            <h3 className=" ms-2  text-white">New</h3>
          </div>
        </div>

        <div className="col">
          <div className="card bg-primary">
            <p className=" ms-3 fs-2 fw-bold text-white ">{tasks.accepted}</p>
            <h3 className=" ms-2 text-white ">Accepted</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskBox;
