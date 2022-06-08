import { access } from "node:fs/promises";
import path from "path";
import { ERRORS } from "../../errors.js";
import { currentPath } from "../../pathState.js";

export const cd = async (receivedPath) => {
  if (!receivedPath) ERRORS.invalidInput();
  try {
    const newPath = path.join(currentPath.path, receivedPath);
    await access(newPath);
    currentPath.path = newPath;
  } catch {
    ERRORS.operationFailed();
  }
};
