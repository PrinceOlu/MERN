// Accessing the global process
// Note: the console.log() is a global method

// console.log(process);

// Enviroment variables
// console.log(process.env);

// Accessing env variables
const myEnv = process.env.NODE_ENV;
// console.log(`My Node application is running on ${myEnv}`);

// Accessing the env, run the code below directly in the terminal. Ensure you are in the right folder directory
// NODE_ENV=production node app

// =========process.exit()========
// check the current enviroment using 'APP_ENV' enviroment variables
// if (process.env.APP_ENV !== "production") {
//   // display some errors
//   console.log(`this script will only run in production`);
//   //   exit the process
//   process.exit();
// }
// process.cwd()
console.log(`Current working directory: ${process.cwd()}`);

try {
  // change the current working directory
  process.chdir("/trial"); // Change this path to a valid existing directory on your system
  // log current working directory
  console.log(`My new working directory is ${process.cwd()}`);
} catch (error) {
  console.log(error);
}
