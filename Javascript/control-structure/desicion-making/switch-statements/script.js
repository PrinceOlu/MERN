//-----SWITCH STATEMENT----
//Case study 1:
//Suppose you are building a calendar application and you need to display the day of the week based on the number provided (0-6, Sunday-Saturday).

let dayNumber = 9;

switch (dayNumber) {
  case 0:
    console.log("Sunday");
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturday");
    break;
  default:
    console.log("Invalid day number");
}
