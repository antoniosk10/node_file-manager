import { createReadStream, createWriteStream } from "fs";
import { access } from "fs/promises";
import path from "path";
import { pipeline } from "stream/promises";
import { ERRORS } from "../../errors.js";
import { getPath } from "./../../utils.js";

export const cp = async (...params) => {
  const [pathToFile, pathToNewDirectory] = params;
  if (!pathToFile || !pathToNewDirectory || params.length > 2)
    ERRORS.invalidInput();
  const pathFileCopyFrom = getPath(pathToFile);
  const pathFileCopyTo = getPath(pathToNewDirectory);

  try {
    await access(pathFileCopyFrom);
    const readableStream = createReadStream(pathFileCopyFrom);
    const writableStream = createWriteStream(
      path.join(pathFileCopyTo, path.basename(pathFileCopyFrom)),
      { flags: "wx" }
    );
    await pipeline(readableStream, writableStream);
  } catch {
    throw ERRORS.operationFailed;
  }
};
