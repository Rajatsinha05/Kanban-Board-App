import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// Import your Redux action
import '../css/taskform.css'
import { createTask } from "../redux/Action";
const TaskForm = () => {
  const dispatch = useDispatch();
let token=useSelector((store)=>store.user)
  // Manage form state in a single object
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

    // Dispatch action to add task to Redux store
    dispatch(createTask(task,token));

    // Clear the form after submission
    setTask({
      title: "",
      description: "",
      dueDate: "",
      assignee: "",
    });
  };

  return (
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
  );
};

export default TaskForm;
