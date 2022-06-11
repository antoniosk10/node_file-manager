import osInfo from "os";
import { ERRORS } from "../../errors.js";
import { getParamFromFlag } from "../../utils.js";

const AVAILABLE_METHODS = [
  "EOL",
  "cpus",
  "homedir",
  "username",
  "architecture",
];

export const os = async (...params) => {
  const [flag] = params;
  if (!flag || params.length > 1) throw ERRORS.invalidInput;

  const methodOS = getParamFromFlag(flag);
  if (AVAILABLE_METHODS.indexOf(methodOS) === -1) throw ERRORS.invalidInput;

  switch (methodOS) {
    case "EOL": {
      console.log(JSON.stringify(osInfo.EOL));
      break;
    }
    case "username": {
      console.log(JSON.stringify(osInfo.userInfo().username));
      break;
    }
    case "architecture": {
      console.log(JSON.stringify(osInfo.arch()));
      break;
    }
    default: {
      console.log(osInfo[methodOS]());
    }
  }
};
