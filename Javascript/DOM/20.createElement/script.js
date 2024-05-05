// function to create a new task
function createTask(newTask) {
  // lets create a new div element to hold the task
  const taskDiv = document.createElement("div");

  // add new css style to the div we created
  //   we can achieve this 2methods, setAttribute or classname
  //   using setAttribute
  taskDiv.setAttribute("class", "task");
  //   using className
  taskDiv.className = "task";
  //   lets us create the task text using createTextNode
  const taskText = document.createTextNode(newTask);
  //   now let us append the text to the div
  taskDiv.appendChild(taskText);
  console.log(taskDiv);
  //   finally append the content to the container
  const container = document.getElementById("container");
  const newContainer = container.appendChild(taskDiv);
}
createTask("laundry");
createTask("Programming");
createTask("Go to the club");
createTask("Go fishing");
