import { rename } from "fs/promises";
import path from "path";
import { ERRORS } from "../../errors.js";
import { getPath } from "./../../utils.js";

export const rn = async (...params) => {
  const [pathToFile, newFileName] = params;
  if (!pathToFile || !newFileName || params.length > 2)
    throw ERRORS.invalidInput;
  const pathCurrentFile = getPath(pathToFile);
  const pathNewFile = path.join(path.dirname(pathCurrentFile), newFileName);
  try {
    await rename(pathCurrentFile, pathNewFile);
  } catch {
    throw ERRORS.operationFailed;
  }
};
