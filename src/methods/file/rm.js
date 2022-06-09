import { rm as remove } from "fs/promises";
import { join } from "path";
import { ERRORS } from "../../errors.js";
import { currentPath } from "../../pathState.js";

export const rm = async (...params) => {
  const [removeFilePath] = params;
  if (!removeFilePath || params.length > 1) ERRORS.invalidInput();
  const pathToFile = join(currentPath.path, removeFilePath);
  try {
    await remove(pathToFile);
  } catch {
    ERRORS.operationFailed();
  }
};
