// file system using Promise
const fs = require("fs/promises");

// Async method (using Promise)
const readFile = async () => {
  try {
    const content = await fs.readFile("./sample.pdf", "utf-8");
    console.log(content);
  } catch (error) {
    console.log(error);
  }
};
readFile();
