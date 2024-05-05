// Using getAttribute and setAttribute
const userCard = document.getElementById("userCard");
console.log(userCard);
// to get userID
const userID = userCard.getAttribute("data-user-id");
console.log(`i am the User ID :`, userID);
// to get userrole
const userRole = userCard.getAttribute("data-user-role");
console.log(`I am the User Role:`, userRole);

// modifying data attributes
const userAdmin = userCard.setAttribute("data-user-role", "Super-Admin");
const newUserID = userCard.setAttribute("data-user-id", "321");

// adding new attribute using setAttribute
const NewAttr = userCard.setAttribute("user-data-position", "Engineer");
