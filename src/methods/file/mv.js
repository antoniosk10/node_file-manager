import { ERRORS } from "../../errors.js";
import { cp } from "./cp.js";
import { rm } from "./rm.js";

export const mv = async (...params) => {
  const [moveFileFrom, moveFileTo] = params;
  if (!moveFileFrom || !moveFileTo || params.length > 2) ERRORS.invalidInput();
  await cp(moveFileFrom, moveFileTo);
  await rm(moveFileFrom, moveFileTo);
};
