import { createReadStream, createWriteStream } from "fs";
import path from "path";
import { pipeline } from "stream/promises";
import zlib from "zlib";
import { ERRORS } from "../../errors.js";
import { currentPath } from "./../../pathState.js";
import { getPath } from "./../../utils.js";

export const compress = async (...params) => {
  const [compressFileFrom, compressFileTo] = params;
  if (!compressFileFrom || !compressFileTo || params.length > 2)
    throw ERRORS.invalidInput;

  const zip = zlib.createBrotliCompress();
  const filePath = getPath(compressFileFrom);
  const archivedFilePath = path.extname(compressFileTo)
    ? getPath(compressFileTo)
    : path.join(
        currentPath.path,
        compressFileTo,
        `${path.basename(filePath)}.br`
      );
  const input = createReadStream(filePath);
  const output = createWriteStream(archivedFilePath, { flags: "wx" });

  try {
    await pipeline(input, zip, output);
  } catch {
    throw ERRORS.operationFailed;
  }
};
