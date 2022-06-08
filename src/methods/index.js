import { ERRORS } from "./../errors.js";
import { cd } from "./path/cd.js";
import { ls } from "./path/ls.js";
import { up } from "./path/up.js";
import { cat } from "./file/cat.js";
import { add } from "./file/add.js";
import { rn } from "./file/rn.js";
import { cp } from "./file/cp.js";
import { mv } from "./file/mv.js";
import { rm } from "./file/rm.js";

const MAP_OF_METHODS = {
  cd,
  up,
  ls,
  cat,
  add,
  rn,
  cp,
  mv,
  rm,
};

export const execCommand = async (input) => {
  const params = input.split(" ");
  const command = params.shift();
  if (!MAP_OF_METHODS[command]) ERRORS.invalidInput();
  return await MAP_OF_METHODS[command](...params);
};
