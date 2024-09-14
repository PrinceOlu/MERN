// lets create an example that demostrates the use of  'insert before' to manage a list of students based on their grades. In this exampls, we will keep the list sorted based on the grade of each student. As new students are added, they will be inserted in the correct position to maintain the sorted list.

// function to add a new student and their grade
function addStudent(name, grade) {
  // create a new div to hold the student info
  const studentDiv = document.createElement("div");
  //   add css style to the div using className or setAttribute
  studentDiv.className = "student";
  //   create a text node containing the student name and grade
  const studentTextNode = document.createTextNode(`${name} : ${grade}`);
  //   append the student textNode to the div element
  studentDiv.appendChild(studentTextNode);
  //   select the container
  const studentList = document.getElementById("studentList");
  //   to append the content
  let beforeNode = null;
  // llop through the existing students to find the correct position for the new student
  //   using 'for of loop`
  for (const child of studentList.children) {
    const childGrade = parseInt(child.textContent.split(":")[1]);
    if (grade < childGrade) {
      beforeNode = child;
      break;
    }
  }
  //   insert the new student to the current position
  studentList.insertBefore(studentDiv, beforeNode);
  console.log(studentDiv);
}

addStudent("segun", "90%");
addStudent("Mofe", "80%");
addStudent("Moyo", "70%");
addStudent("Ade", "60%");
addStudent("John", "50%");
