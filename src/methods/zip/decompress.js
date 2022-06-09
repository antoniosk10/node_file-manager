import { createReadStream, createWriteStream } from "fs";
import { join } from "path";
import { pipeline } from "stream/promises";
import zlib from "zlib";
import { ERRORS } from "../../errors.js";
import { currentPath } from "../../pathState.js";

export const decompress = async (...params) => {
  const [compressFileFrom, compressFileTo] = params;
  if (!compressFileFrom || !compressFileTo || params.length > 2)
    ERRORS.invalidInput();

  const zip = zlib.createBrotliDecompress();
  const filePath = join(currentPath.path, compressFileFrom);
  const archivedFilePath = join(currentPath.path, compressFileTo);
  const input = createReadStream(filePath);
  const output = createWriteStream(archivedFilePath);

  try {
    await pipeline(input, zip, output);
  } catch {
    ERRORS.operationFailed();
  }
};
