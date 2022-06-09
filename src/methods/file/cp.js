import { copyFile } from "fs/promises";
import { join } from "path";
import { ERRORS } from "../../errors.js";
import { currentPath } from "../../pathState.js";

export const cp = async (...params) => {
  const [copyFileFrom, copyFileTo] = params;
  if (!copyFileFrom || !copyFileTo || params.length > 2) ERRORS.invalidInput();
  const pathFileCopyFrom = join(currentPath.path, copyFileFrom);
  const pathFileCopyTo = join(currentPath.path, copyFileTo);
  try {
    await copyFile(pathFileCopyFrom, pathFileCopyTo);
  } catch {
    ERRORS.operationFailed();
  }
};
