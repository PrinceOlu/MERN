// ----------------------
// Objects in array
// ------------------

// use case
//  managing a list of students
// create a list of student where each students is an objects with properties like `id`, `name`, and `grade`.

const students = [
  { id: 1, name: "segun", grade: "A" },
  { id: 2, name: "mofe", grade: "B" },
];
// accessing students
const demo = students;
// console.log(demo);
// console.log(demo[1].name);

// ---------------------------------------
// to insert new record
// -----------------------------------
// adding a new student using functions and array methods. lets use an arrow function
const newStudent = (name, grade) => {
  // get new ID dynamically
  const newID = students.length + 1;
  const newStudent = {
    id: newID,
    name: name,
    garde: grade,
  };
  //use push methosd to add te newstudent data to the students list
  students.push(newStudent);
};
// call the function with arguements because it has arguements
newStudent("Moyo", "C");

console.log(students);

// ---------------------------------------
// to update record
// -----------------------------------

// updating the value of a student
const updateStudentgrade = (id, newGrade) => {
  // find the student by ID using find method
  const findstudent = students.find((students) => {
    return students.id === id;
  });
  if (findstudent) {
    findstudent.grade = newGrade;
  } else {
    console.log(`student with id: ${id} not found`);
  }
};
// call the function and pass the arguements
updateStudentgrade(1, "F");
// console.log(students);
