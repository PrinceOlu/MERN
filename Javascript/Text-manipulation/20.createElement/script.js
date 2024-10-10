// lets use function to create a new task
function createTask(newTask) {
  // create a new div to put the attribute and tasks
  const taskDiv = document.createElement("div");
  // attach new css attribute to the div we created
  //   we can achieve this by using either of these  2 methods:
  // setAttribute or classname
  taskDiv.setAttribute("class", "task");
  // or use className
  taskDiv.className = "task";
  // create the tasks using the arguement from the function in create createTask
  const taskLists = document.createTextNode(newTask);

  // now lets append the tasklists inside the div
  taskDiv.appendChild(taskLists);
  // finally lets append the tasklists inside the container
  const container = document.getElementById("container");
  container.appendChild(taskDiv);
}

createTask("Programming");
createTask("Go to the club");
createTask("Go fishing");
