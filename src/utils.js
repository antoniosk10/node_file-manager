import { ERRORS } from "./errors.js";
import { readLine } from "./index.js";
import { currentPath } from "./pathState.js";
import os from "os";
import path from "path";

export const getUserName = (params) => {
  const listParams = params[0].split("=");
  if (listParams[0] === "--username" && listParams[1].length)
    return listParams[1];
  throw new Error(
    "Wrong username parameter(Example: --username=your_username)"
  );
};

export const exit = (username) => {
  console.log(`Thank you for using File Manager, ${username}!`);
  readLine.close();
};

export const showCurrentPath = () => {
  const output = `You are currently in ${currentPath.path}`;
  const separator = output.replace(/./g, "-");
  console.log(separator);
  console.log(`You are currently in ${currentPath.path}`);
  console.log(separator);
};

export const getParamFromFlag = (flag) => {
  const [startFlag, contentFlag] = flag.split("--");
  if (startFlag !== "") throw ERRORS.invalidInput;
  return contentFlag;
};

export const getPath = (receivedPath) => {
  const normalizePath = path.normalize(receivedPath);
  if (normalizePath.startsWith(os.homedir())) return normalizePath;
  return path.join(currentPath.path, receivedPath);
};
