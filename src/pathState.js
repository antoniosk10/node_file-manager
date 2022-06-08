import os from "os";

class Path {
  constructor() {
    this.DEFAULT_PATH = os.homedir();
    this._path = this.DEFAULT_PATH;
  }
  get path() {
    return this._path;
  }
  set path(value) {
    if (value.startsWith(this.DEFAULT_PATH)) this._path = value;
  }
}

export const currentPath = new Path();
