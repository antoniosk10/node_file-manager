import { cp } from "./cp.js";
import { rm } from "./rm.js";

export const mv = async (moveFileFrom, moveFileTo) => {
  await cp(moveFileFrom, moveFileTo);
  await rm(moveFileFrom, moveFileTo);
};
