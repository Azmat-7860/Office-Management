import React from "react";

const CreateTask = () => {
  return (
    <div className=" container creat-task">
      <div className=" py-3">
        <h2 className="text-white fs-1 mb-3">Create Task</h2>
        <form>
          <div className="row">
            {/* Task Title */}
            <div className="col-md-6 mb-3">
              <label htmlFor="taskTitle" className="form-label text-success ">
                Task Title
              </label>
              <input
                type="text"
                className="form-control  bg-success-subtle "
                id="taskTitle"
                placeholder="Enter task title"
              />
              <label
                htmlFor="taskDate"
                className="form-label text-success mt-3"
              >
                Task Date
              </label>
              <input
                type="date"
                className="form-control bg-success-subtle"
                id="taskDate"
              />
              <label
                htmlFor="assignTo"
                className="form-label text-success mt-3 "
              >
                Assign To
              </label>
              <input
                type="text"
                className="form-control bg-success-subtle"
                id="assignTo"
                placeholder="Assign to"
              />
              <label
                htmlFor="taskCategory"
                className="form-label text-success mt-3"
              >
                Task Category
              </label>
              <select
                className="form-select bg-success-subtle"
                id="taskCategory"
              >
                <option>Select Category</option>
                <option>Development</option>
                <option>Design</option>
                <option>Marketing</option>
              </select>
            </div>

            {/* desciption Button */}
            <div className="col-md-6 h-100 align-content-center">
              <label
                htmlFor="taskDescription"
                className="form-label text-success "
              >
                Description
              </label>
              <textarea
                className="form-control bg-success-subtle"
                id="taskDescription"
                rows="5"
                placeholder="Enter task description"
              ></textarea>
              <button
                type="submit"
                className="btn btn-outline-success mt-3 fw-bold w-100"
              >
                Create Task
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateTask;
