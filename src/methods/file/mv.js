import { ERRORS } from "../../errors.js";
import { cp } from "./cp.js";
import { rm } from "./rm.js";

export const mv = async (...params) => {
  const [pathToFile, moveFileTo] = params;
  if (!pathToFile || !moveFileTo || params.length > 2)
    throw ERRORS.invalidInput;
  await cp(pathToFile, moveFileTo);
  await rm(pathToFile);
};
