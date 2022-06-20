import { createReadStream } from "fs";
import { Writable } from "stream";
import { pipeline } from "stream/promises";
import { ERRORS } from "../../errors.js";
import { getPath } from "./../../utils.js";

export const cat = async (...params) => {
  const [receivedPath] = params;
  if (!receivedPath || params.length > 1) throw ERRORS.invalidInput;
  const pathToFile = getPath(receivedPath);
  const customWritable = new Writable();
  customWritable._write = (chunk, _, done) => {
    console.log(chunk.toString());
    done();
  };
  try {
    await pipeline(createReadStream(pathToFile), customWritable);
  } catch {
    throw ERRORS.operationFailed;
  }
};
