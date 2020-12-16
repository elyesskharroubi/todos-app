import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusSquare } from "@fortawesome/free-solid-svg-icons";
import { addTask } from "../redux/actions";
import { useDispatch } from "react-redux";

const AddTask = () => {
  const [newTask, setNewTask] = useState("");
  const dispatch = useDispatch();

  return (
    <div className="addContainer">
      <form>
        <input
          type="text"
          placeholder="Add Task"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button
          className="addBtn"
          onClick={(e) => {
            e.preventDefault();
            dispatch(addTask(newTask));
            setNewTask("");
          }}
        >
          <FontAwesomeIcon icon={faPlusSquare} />
        </button>
        <select>
          <option>All</option>
          <option>Not done</option>
          <option>Done</option>
        </select>
      </form>
    </div>
  );
};

export default AddTask;
