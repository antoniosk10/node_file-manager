import { rename } from "fs/promises";
import { join } from "path";
import { ERRORS } from "../../errors.js";
import { currentPath } from "../../pathState.js";

export const rn = async (...params) => {
  const [currentFileName, newFileName] = params;
  if (!currentFileName || !newFileName || params.length > 2)
    ERRORS.invalidInput();
  const pathCurrentFile = join(currentPath.path, currentFileName);
  const pathNewFile = join(currentPath.path, newFileName);
  try {
    await rename(pathCurrentFile, pathNewFile);
  } catch {
    ERRORS.operationFailed();
  }
};
