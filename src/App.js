import React, { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

//importing components
import AddTask from "./components/AddTask";
import TaskList from "./components/TaskList";

function App() {
  const [change, setChange] = useState("All");

  return (
    <div className="App">
      <h1>JUST DO IT</h1>
      <AddTask />
      <select onChange={(e) => setChange(e.target.value)}>
        <option>All</option>
        <option>Not done</option>
        <option>Done</option>
      </select>
      <TaskList change={change}/>
    </div>
  );
}

export default App;
