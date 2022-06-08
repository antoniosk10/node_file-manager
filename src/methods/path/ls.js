import { readdir } from "node:fs/promises";
import { ERRORS } from "../../errors.js";
import { currentPath } from "../../pathState.js";

export const ls = async () => {
  try {
    const files = await readdir(currentPath.path);
    for (const file of files) console.log(file);
  } catch {
    ERRORS.operationFailed();
  }
};
