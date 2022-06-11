import { rm as remove } from "fs/promises";
import { ERRORS } from "../../errors.js";
import { getPath } from "./../../utils.js";

export const rm = async (...params) => {
  const [removeFilePath] = params;
  if (!removeFilePath || params.length > 1) throw ERRORS.invalidInput;
  const pathToFile = getPath(removeFilePath);
  try {
    await remove(pathToFile);
  } catch {
    throw ERRORS.operationFailed;
  }
};
