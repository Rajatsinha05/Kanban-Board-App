import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteTask, getTasks, updateTask } from "../redux/Action";
import Task from "./Task";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../css/tasklist.css";
import Cookies from "universal-cookie";

const TaskList = () => {
  const cookies = new Cookies(null, { path: "/" });
  const dispatch = useDispatch();
  const data = useSelector((store) => store);
  const [filter, setFilter] = useState("all");
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    if (data.user) {
      cookies.set("token", data.user);
      dispatch(getTasks(data.user));
    }
  }, [data.user, dispatch]);

  useEffect(() => {
    setTasks(data.tasks);
  }, [data.tasks]);

  const handleDelete = async (id) => {
    try {
      await dispatch(deleteTask(id, data.user));
      setTasks((prevTasks) => prevTasks.filter((task) => task._id !== id));
      toast.success("Task deleted successfully!", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    } catch (error) {
      toast.error("Failed to delete task", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    }
  };

  const handleUpdate = async (id, status) => {
    try {
      await dispatch(updateTask(id, { status }, data.user));
      setTasks((prevTasks) =>
        prevTasks.map((task) =>
          task._id === id ? { ...task, status } : task
        )
      );
      toast.success("Task updated successfully!", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    } catch (error) {
      toast.error("Failed to update task", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    }
  };

  const filterTasks = (status) => {
    setFilter(status);
  };

  const filteredTasks = tasks.filter((task) => {
    if (filter === "all") {
      return true;
    } else {
      return task.status.toLowerCase() === filter.toLowerCase(); // Match status consistently
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
          <Task
            key={task._id}
            {...task}
            onDelete={handleDelete}
            onUpdate={handleUpdate}
          />
        ))}
      </div>
      <ToastContainer />
    </div>
  );
};

export default TaskList;
