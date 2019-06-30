import { exec } from "child_process";
import { promisify } from "util";

import { Exec } from "./exec";

export const childProcessExec: Exec = promisify(exec);
