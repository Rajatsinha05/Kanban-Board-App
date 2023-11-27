// Task.jsx

import React, { useState } from "react";
import "../css/task.css";

const Task = ({ id, title, status, onUpdate }) => {
  const [newStatus, setNewStatus] = useState(status);
  const [showDropdown, setShowDropdown] = useState(false);
  const [showAllData, setShowAllData] = useState(false);

  const handleUpdate = () => {
    setShowDropdown(!showDropdown);
  };

  const handleStatusChange = (selectedStatus) => {
    setNewStatus(selectedStatus);
  };

  const handleSaveUpdate = () => {
    onUpdate(id, newStatus);
    setShowDropdown(false);
  };

  const handleCancelUpdate = () => {
    setShowDropdown(false);
  };

  const handleDelete = () => {
    // Implement your delete logic here
    console.log(`Delete task with ID ${id}`);
  };

  const handleView = () => {
    setShowAllData(!showAllData);
  };

  return (
    <div className="task">
      <div className="task-title">{title}</div>
      <div className="task-status">Status: {status}</div>
      {showAllData && (
        <div>
          {/* Display additional data here */}
          <p>Task ID: {id}</p>
        </div>
      )}
      {showDropdown && (
        <div className="status-dropdown">
          <label>Select Status:</label>
          <select
            value={newStatus}
            onChange={(e) => handleStatusChange(e.target.value)}
          >
            <option value="inprogress">In Progress</option>
            <option value="done">Done</option>
          </select>
          <button onClick={handleSaveUpdate}>Save</button>
          <button onClick={handleCancelUpdate}>Cancel</button>
        </div>
      )}
      <div className="task-buttons">
        <button className="update-button" onClick={handleUpdate}>
          Update
        </button>
        <button className="delete-button" onClick={handleDelete}>
          Delete
        </button>
        <button className="view-button" onClick={handleView}>
          {showAllData ? "Hide" : "View"}
        </button>
      </div>
    </div>
  );
};

export default Task;
