// TaskList.jsx

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTasks } from "../redux/Action";
import Task from "./Task";
import "../css/tasklist.css";
// ... (other imports)

const TaskList = () => {
  const dispatch = useDispatch();
  const data = useSelector((store) => store);
  const [filter, setFilter] = useState("all"); // Default filter is "all"

  useEffect(() => {
    if (data.user) {
      dispatch(getTasks(data.user)); // Corrected here
    }
  }, [data.user, dispatch]);

  const filterTasks = (status) => {
    setFilter(status);
  };

  const filteredTasks = data.tasks.filter((task) => {
    if (filter === "all") {
      return true;
    } else {
      return task.status === filter;
    }
  });

  return (
    <div className="task-list-container">
      <h1>Task List</h1>
      <div className="filter-buttons">
        <button onClick={() => filterTasks("all")}>All</button>
        <button onClick={() => filterTasks("ToDo")}>To-Do</button>
        <button onClick={() => filterTasks("inprogress")}>In Progress</button>
        <button onClick={() => filterTasks("Done")}>Done</button>
      </div>
      <div className="tasks-section">
        {filteredTasks.map((task) => (
          <Task key={task._id} {...task} />
        ))}
      </div>
    </div>
  );
};

export default TaskList;
