// // to filter the list of active users
// const users = [
//   {
//     id: 1,
//     isActive: true,
//     name: "Segun",
//   },
//   {
//     id: 2,
//     isActive: false,
//     name: "Mofe",
//   },
//   {
//     id: 3,
//     isActive: true,
//     name: "Ade",
//   },
// ];
// const activeUsers = users.filter((users) => {
//   return users.isActive === true;
// });

// console.log(`All users: `, users);
// console.log(`active users only `, activeUsers);

// lets log transactions above certain amount

const transactions = [
  { id: 1, amount: 100 },
  { id: 2, amount: 150 },
  { id: 3, amount: 200 },
  { id: 4, amount: 250 },
  { id: 5, amount: 300 },
];

let aboveTransactions = transactions.filter((transactions) => {
  return transactions.amount > 150;
});

console.log(`All transactions :`, transactions);
console.log(`Transactons avove 150 `, aboveTransactions);
