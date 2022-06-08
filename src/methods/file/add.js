import { writeFile } from "fs/promises";
import { join } from "path";
import { ERRORS } from "../../errors.js";
import { currentPath } from "../../pathState.js";

export const add = async (receivedPath) => {
  if (!receivedPath) ERRORS.invalidInput();
  const pathToFile = join(currentPath.path, receivedPath);
  try {
    await writeFile(pathToFile, "", { flag: "wx" });
  } catch {
    ERRORS.operationFailed();
  }
};
