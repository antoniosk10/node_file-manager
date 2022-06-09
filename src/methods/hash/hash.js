import crypto from "crypto";
import { readFile } from "fs/promises";
import { join } from "path";
import { currentPath } from "../../pathState.js";

export const hash = async (...params) => {
  const [receivedPath] = params;
  if (!receivedPath || params.length > 1) ERRORS.invalidInput();
  const filePath = join(currentPath.path, receivedPath);
  const data = await readFile(filePath, { encoding: "utf-8" });
  console.log(crypto.createHash("sha256").update(data).digest("hex"));
};
