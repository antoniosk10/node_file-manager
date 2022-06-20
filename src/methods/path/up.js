import path from "path";
import { currentPath } from "../../pathState.js";

export const up = () => {
  currentPath.path = path.join(currentPath.path, "..");
};
