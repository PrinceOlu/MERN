// common js module
const fs = require("fs");

// 1) Read the sample.pdf

// Method 1 Sync (NOTE: this is not callback)
// const contentBuffer = fs.readFileSync("./sample.pdf");
// the result will be in buffer
// console.log(contentBuffer);
//convert the buffer to readable content
// const content = contentBuffer.toString();
// console.log(content);

// method 2 Async (using callback)
// fs.readFile("./sample.pdf", "utf-8", (error, data) => {
//   if (error) {
//     console.log(error);
//     throw error;
//   } else {
//     console.log(data);
//   }
// });

// 2) Write into empty.pdf using Async
fs.writeFile("./empty.pdf", "some new text", (error) => {
  if (error) {
    console.log(error);
    return;
  } else {
    console.log("file written successfully...");
  }
});

// 3.  Append content to the new file
// fs.appendFile("./empty.pdf", "Appended content", (error) => {
//   if (error) {
//     console.log(error);
//     return;
//   } else {
//     console.log("file appended successfully...");
//   }
// });

// 4) checking if a file already exists
// fs.access("./empty.pdf", fs.constants.F_OK, (error) => {
//   if (error) {
//     console.log("file does not exists...");
//     return;
//   } else {
//     console.log("file found...");
//   }
// });

// 5) deleting a file
// fs.unlink("./empty.pdf", (error) => {
//   if (error) {
//     console.log(error);
//     return;
//   } else {
//     console.log("file deleted...");
//   }
// });
