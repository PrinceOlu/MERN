// updating the properties of a student in a class
const students = [
  { id: 1, name: "Segun", grade: "A" },
  { id: 2, name: "Mofe", grade: "B" },
  { id: 3, name: "Moyo", grade: "C" },
];

// Grade updates
const gradeUpdate = [{ grade: "A+" }, { grade: "A" }, { grade: "A-" }];

// update the students
const updatedStudents = students.map((students, index) => {
  return Object.assign({}, students, gradeUpdate[index]);
});
console.log(updatedStudents);
