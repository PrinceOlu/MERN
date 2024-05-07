// -------------------------------------------
// Objects in array
// -------------------------------------------

// task:
//  create a simple 'todo list' object that has a tasks array property. Each object inside the 'tasks' array will have property like 'id', 'description', and 'completed'

const todoLists = {
  title: "Todo list App",
  tasks: [
    { id: 1, description: "buy groceries", isCompleted: false },
    { id: 2, description: "Go to gym", isCompleted: true },
    { id: 3, description: "call mom", isCompleted: false },
  ],
};
// console.log(todoLists);
// console.log(todoLists.title);
// console.log(todoLists.tasks[1]);

// ---------------------------------------
// to insert new record
// -----------------------------------
// function to add a task
const addTask = (description) => {
  // get new ID dynamically
  const newID = todoLists.tasks.length + 1;
  const newTask = {
    id: newID,
    description: description,
    isCompleted: false,
  };
  // push the new task into the original task
  todoLists.tasks.push(newTask);
};
// call the function

addTask("do my assignments");
console.log(todoLists);

// ---------------------------------------
// to update record
// -----------------------------------
const updateDescription = (id, NewisCompleted) => {
  const findTask = todoLists.tasks.find((task) => {
    return task.id === id;
  });
  if (findTask) {
    findTask.isCompleted = NewisCompleted;
  } else {
    console.log(`There is no id: ${id}`);
  }
};

updateDescription(1, true);
