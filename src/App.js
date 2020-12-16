import React from "react";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';

//importing components
import AddTask from "./components/AddTask";
import TaskList from "./components/TaskList";

function App() {
  return (
    <div className="App">
      <h1>JUST DO IT</h1>
      <AddTask />
      <TaskList />
    </div>
  );
}

export default App;
