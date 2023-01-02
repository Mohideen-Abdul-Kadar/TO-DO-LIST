import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import AddTask from "./AddTask";
import "./index.css";
import { AiOutlineDelete } from "react-icons/ai";

const ToDoList = () => {
  const addTask = (text) => {
    updateTask([...tasks, { text }]);
  };

  const [tasks, updateTask] = useState([
    {
      text: "wake up",
      isCompleted: false,
    },
    {
      text: "wake up",
      isCompleted: false,
    },
    {
      text: "wake up",
      isCompleted: false,
    },
  ]);

  const toggleTask = (index) => {
    const newTask = [...tasks];
    if (newTask[index].isCompleted) {
      newTask[index].isCompleted = false;
    } else {
      newTask[index].isCompleted = true;
    }
    updateTask(newTask);
  };

  const removeTask = (index) => {
    const newTask = [...tasks];
    newTask.splice(index, 1);
    updateTask(newTask);
  };

  return (
    <div className="list-of-tasks-todo">
      <AddTask addTask={addTask} />
      {tasks.map((task, index) => (
        <div className="task-status">
          <button
            onClick={() => toggleTask(index)}
            className={
              task.isCompleted ? "task-name isCompleted-task" : "task-name"
            }
          >
            {index} - {task.text} {task.isCompleted}
          </button>

          <button onClick={() => removeTask(index)} className="delete">
            <i>
              <AiOutlineDelete />
            </i>
          </button>
        </div>
      ))}
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<ToDoList />);
// ReactDOM.render(<ToDoList /> ,document.getElementById('root'));
