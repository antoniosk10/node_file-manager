export const ERRORS = {
  invalidInput: () => {
    throw new Error("Invalid input");
  },
  operationFailed: () => {
    throw new Error("Operation failed");
  },
};
