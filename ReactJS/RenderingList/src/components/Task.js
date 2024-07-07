import React, { useState } from "react";

function Task() {
  const [tasks, setTasks] = useState([
    { id: 1, name: "Eat", completed: true },
    { id: 2, name: "Sing", completed: false },
    { id: 3, name: "Dance", completed: false },
    { id: 4, name: "Read", completed: true },
  ]);
  console.log(tasks);
  return (
    <div>
      <h1>Task Lists</h1>
      <ul>
        {tasks.map((task) => {
          return (
            <li key={task.id}>
              {task.name} - {task.completed ? "Completed" : "Pending"}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Task;
