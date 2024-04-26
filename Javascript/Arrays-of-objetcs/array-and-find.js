// Search and filter using find
// Find the first patient with a specific ailment in a Hospital database.

const patient = [
  { id: 101, name: "Sarah", disease: "cold" },
  { id: 102, name: "Mike", disease: "fever" },
  { id: 103, name: "luci", disease: "cold" },
  { id: 104, name: "Adam", disease: "cough" },
  { id: 105, name: "Abel", disease: "Malaria" },
  { id: 106, name: "Paul", disease: "cold" },
];

// finding patient with Cold
const patientWithCold = patient.find((patient) => {
  return patient.disease === "cold";
});

console.log(patientWithCold);
