// Task.jsx

import React, { useState } from "react";
import "../css/task.css";
import { useDispatch } from "react-redux";
import { deleteTask, updateTask } from "../redux/Action";

const Task = ({ _id, title, status, DeleteOn, description, dueDate, assignee ,onUpdate}) => {
  const dispatch = useDispatch();
  const [newStatus, setNewStatus] = useState(status);
  const [showDropdown, setShowDropdown] = useState(false);
  const [showAllData, setShowAllData] = useState(false);

  const handleStatusChange = (selectedStatus) => {
    setNewStatus(selectedStatus);
  };

  const handleDelete = () => {
    DeleteOn(_id);
  };

  const handleView = () => {
    setShowAllData(!showAllData);
  };

  const handleStatusUpdate = (status) => {
    // Implement your update logic here
    // dispatch(updateTask(_id, { status }));
    console.log(status);
    onUpdate(_id,status)
    setShowDropdown(false);
  };

  return (
    <div className="task">
      <div className="task-title">{title}</div>
      <div className="task-status">Status: {status}</div>
      {showAllData && (
        <div>
          <p>{description}</p>
          <span>Due Date: {dueDate} </span>
          <br />
          <span>{assignee}</span>
        </div>
      )}
      {showDropdown && (
        <div className="status-dropdown">
          <button onClick={() => handleStatusUpdate("inprogress")}>In Progress</button>
          <button onClick={() => handleStatusUpdate("done")}>Done</button>
          <button onClick={() => setShowDropdown(false)}>Cancel</button>
        </div>
      )}
      <div className="task-buttons">
        <button className="delete-button" onClick={handleDelete}>
          Delete
        </button>
        <button className="view-button" onClick={handleView}>
          {showAllData ? "Hide" : "View"}
        </button>
        {!showDropdown && (
          <button className="status-button" onClick={() => setShowDropdown(true)}>
            Change Status
          </button>
        )}
      </div>
    </div>
  );
};

export default Task;
