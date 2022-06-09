import { createReadStream } from "fs";
import { join } from "path";
import { Writable } from "stream";
import { pipeline } from "stream/promises";
import { ERRORS } from "../../errors.js";
import { currentPath } from "../../pathState.js";

export const cat = async (...params) => {
  const [receivedPath] = params;
  if (!receivedPath || params.length > 1) ERRORS.invalidInput();
  const pathToFile = join(currentPath.path, receivedPath);
  const customWritable = new Writable();
  customWritable._write = (chunk, _, done) => {
    console.log(chunk.toString());
    done();
  };
  try {
    await pipeline(createReadStream(pathToFile), customWritable);
  } catch {
    ERRORS.operationFailed();
  }
};
