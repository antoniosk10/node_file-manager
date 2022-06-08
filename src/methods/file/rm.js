import { rm as remove } from "fs/promises";
import { join } from "path";
import { ERRORS } from "../../errors.js";
import { currentPath } from "../../pathState.js";

export const rm = async (removeFilePath) => {
  if (!removeFilePath) ERRORS.invalidInput();
  const pathToFile = join(currentPath.path, removeFilePath);
  try {
    await remove(pathToFile);
  } catch {
    ERRORS.operationFailed();
  }
};
