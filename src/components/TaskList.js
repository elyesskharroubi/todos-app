import Task from "./Task";
import { useSelector } from "react-redux";

const TaskList = () => {
  const taskList = useSelector((state) => state.tasks);

  return (
    <div className="tasksContainer">
      {taskList.map((el) => (
        <Task task={el.task} id={el.id} isDone={el.isDone} />
      ))}
    </div>
  );
};

export default TaskList;
