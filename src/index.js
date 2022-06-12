import readline from "readline";
import { execCommand } from "./methods/index.js";
import { exit, getUserName, showCurrentPath } from "./utils.js";

export const readLine = readline.createInterface(process.stdin, process.stdout);

const username = getUserName(process.argv.slice(2));
console.log(`Welcome to the File Manager, ${username}!`);
showCurrentPath();

readLine.on("line", (input) => {
  if (input === ".exit") exit(username);
  else {
    execCommand(input)
      .then(() => showCurrentPath())
      .catch((err) => console.log(err.message));
  }
});

readLine.on("SIGINT", () => {
  exit(username);
});
