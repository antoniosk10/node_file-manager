import { createReadStream, createWriteStream } from "fs";
import path from "path";
import { pipeline } from "stream/promises";
import zlib from "zlib";
import { ERRORS } from "../../errors.js";
import { currentPath } from "../../pathState.js";
import { getPath } from "./../../utils.js";

export const decompress = async (...params) => {
  const [decompressFileFrom, decompressFileTo] = params;
  if (!decompressFileFrom || !decompressFileTo || params.length > 2)
    throw ERRORS.invalidInput;

  const zip = zlib.createBrotliDecompress();
  const filePath = getPath(decompressFileFrom);
  const nameOfCurrentFile = path.basename(filePath);
  const nameOfNewFile = nameOfCurrentFile.match(/\.\w+\.br$/)
    ? nameOfCurrentFile.slice(0, -3)
    : nameOfCurrentFile;
  const decompressedFilePath = path.extname(decompressFileTo)
    ? getPath(decompressFileTo)
    : path.join(currentPath.path, decompressFileTo, nameOfNewFile);
  const input = createReadStream(filePath);
  const output = createWriteStream(decompressedFilePath, { flags: "wx" });

  try {
    await pipeline(input, zip, output);
  } catch {
    throw ERRORS.operationFailed;
  }
};
