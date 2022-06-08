import readline from "readline";
import { execCommand } from "./methods/index.js";
import { exit, getUserName, showCurrentPath } from "./utils.js";

export const readLine = readline.createInterface(process.stdin, process.stdout);

const username = getUserName(process.argv.slice(2));
process.stdout.write(`Welcome to the File Manager, ${username}!\n`);
showCurrentPath();

readLine.on("line", async (input) => {
  if (input === ".exit") exit(username);
  else {
    try {
      await execCommand(input);
      showCurrentPath();
    } catch (err) {
      console.log(err.message);
    }
  }
});

readLine.on("SIGINT", () => {
  exit(username);
});
