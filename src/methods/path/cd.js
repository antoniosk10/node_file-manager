import { access } from "node:fs/promises";
import { ERRORS } from "../../errors.js";
import { currentPath } from "../../pathState.js";
import { getPath } from "./../../utils.js";

export const cd = async (...params) => {
  const [receivedPath] = params;
  if (!receivedPath || params.length > 1) throw ERRORS.invalidInput;
  try {
    const newPath = getPath(receivedPath);
    await access(newPath);
    currentPath.path = newPath;
  } catch {
    throw ERRORS.operationFailed;
  }
};
