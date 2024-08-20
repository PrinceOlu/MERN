//-----SWITCH STATEMENT----
//Case study 1:
//Suppose you are building a calendar application and you need to display the day of the week based on the number provided (0-6, Sunday-Saturday).

// let dayNumber = 3;

// switch (dayNumber) {
//   case 0:
//     console.log("Sunday");
//   case 1:
//     console.log("Monday");
//     break;
//   case 2:
//     console.log("Tuesday");
//     break;
//   case 3:
//     console.log("Wednesday");
//     break;
//   case 4:
//     console.log("Thursday");
//     break;
//   case 5:
//     console.log("Friday");
//     break;
//   case 6:
//     console.log("Saturday");
//     break;
//   default:
//     console.log("Invalid day number");
// }

//Case study 2:
// //Suppose you are working on a car and you need to determine what action to take based on the color of the traffic light. Here's how you might use a switch statement for this purpose:
// let trafficLight = "green";
// switch (trafficLight) {
//   case "green":
//     console.log("GO");
//     break;
//   case "yellow":
//     console.log("Ready");
//   case "red":
//     console.log("Stop");
//     break;
//   default:
//     console.log("Invalid color");
// }

// convert the above code to a ternary
let trafficLight = "green";
trafficLight === "green"
  ? console.log("GO")
  : trafficLight === "yellow"
  ? console.log("Ready")
  : console.log("Stop");
