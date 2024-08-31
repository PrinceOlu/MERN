// search and filter using every()

// confirm if all students passed their exams

const students = [
  { id: 1, name: "Segun", grade: "A" },
  { id: 2, name: "Mofe", grade: "B" },
  { id: 3, name: "Moyo", grade: "C" },
];

const allPaseed = students.every((students) => {
  students.grade !== "F";
});
console.log(allPaseed);
