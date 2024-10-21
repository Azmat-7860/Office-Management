import React from "react";

const TaskLists = () => {
  return (
    <div
      id="taskList"
      className="mt-4 w-100 overflow-x-auto p-2 d-flex flex-nowrap justify-content-start align-items-center"
    >
      <div className="task mx-2 p-3 flex-shrink-0 bg-info rounded-3">
        <div className=" d-flex justify-content-between">
          <p className=" bg-danger text-white rounded-2  fw-medium  d-inline-block  px-2  px-1">
            Low
          </p>
          <p className="text-white">20 feb 2024</p>
        </div>
        <h3 className=" text-white text-capitalize">Make a youtube video</h3>
        <p className=" text-white mt-3">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur
          eius laborum deserunt dolore vel nostrum tempora.
        </p>
      </div>
      <div className="task mx-2 p-3 flex-shrink-0 bg-success rounded-3">
        <div className=" d-flex justify-content-between">
          <p className=" bg-danger text-white rounded-2  fw-medium  d-inline-block  px-2  px-1">
            Low
          </p>
          <p className="text-white">20 feb 2024</p>
        </div>
        <h3 className=" text-white text-capitalize">Make a youtube video</h3>
        <p className=" text-white mt-3">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur
          eius laborum deserunt dolore vel nostrum tempora.
        </p>
      </div>
      <div className="task mx-2 p-3 flex-shrink-0 bg-primary rounded-3">
        <div className=" d-flex justify-content-between">
          <p className=" bg-danger text-white rounded-2  fw-medium  d-inline-block  px-2  px-1">
            Low
          </p>
          <p className="text-white">20 feb 2024</p>
        </div>
        <h3 className=" text-white text-capitalize">Make a youtube video</h3>
        <p className=" text-white mt-3">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur
          eius laborum deserunt dolore vel nostrum tempora.
        </p>
      </div>
      <div className="task mx-2 p-3 flex-shrink-0 bg-info rounded-3">
        <div className=" d-flex justify-content-between">
          <p className=" bg-danger text-white rounded-2  fw-medium  d-inline-block  px-2  px-1">
            Low
          </p>
          <p className="text-white">20 feb 2024</p>
        </div>
        <h3 className=" text-white text-capitalize">Make a youtube video</h3>
        <p className=" text-white mt-3">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur
          eius laborum deserunt dolore vel nostrum tempora.
        </p>
      </div>
    </div>
  );
};

export default TaskLists;
