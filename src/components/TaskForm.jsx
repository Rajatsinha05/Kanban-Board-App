import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "../css/taskform.css";
import { createTask } from "../redux/Action";

const TaskForm = () => {
  const dispatch = useDispatch();
  let token = useSelector((store) => store.user);

  const [task, setTask] = useState({
    title: "",
    description: "",
    dueDate: "",
    assignee: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTask((prevTask) => ({
      ...prevTask,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple validation checks
    if (!task.title || !task.description || !task.dueDate || !task.assignee) {
      // Show error popup for incomplete form
      toast.error("Please fill in all fields!", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      return;
    }

   
    dispatch(createTask(task, token));

  
    toast.success("Task created successfully!", {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });

   
    setTask({
      title: "",
      description: "",
      dueDate: "",
      assignee: "",
    });
  };

  return (
    <div>
      <form className="task-form" onSubmit={handleSubmit}>
        <div>
          <label>Title:</label>
          <input
            type="text"
            name="title"
            value={task.title}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Description:</label>
          <textarea
            name="description"
            value={task.description}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Due Date:</label>
          <input
            type="date"
            name="dueDate"
            value={task.dueDate}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Assignee:</label>
          <input
            type="text"
            name="assignee"
            value={task.assignee}
            onChange={handleChange}
          />
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
};

export default TaskForm;
