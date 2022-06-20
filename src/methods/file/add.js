import { createWriteStream } from "fs";
import { ERRORS } from "../../errors.js";
import { getPath } from "./../../utils.js";

export const add = async (...params) => {
  const [receivedPath] = params;
  if (!receivedPath || params.length > 1) throw ERRORS.invalidInput;
  const pathToFile = getPath(receivedPath);

  return new Promise((resolve, reject) => {
    const writeStream = createWriteStream(pathToFile, { flags: "wx" });
    writeStream.write("");
    writeStream.on("finish", resolve);
    writeStream.on("error", () => reject(ERRORS.operationFailed));
    writeStream.end();
  });
};
