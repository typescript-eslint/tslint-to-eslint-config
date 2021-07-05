import { exec } from "child_process";

import { Exec } from "./exec";

export const childProcessExec: Exec = async (command: string) => {
    return await new Promise((resolve, reject) => {
        exec(
            command,
            {
                env: {
                    NODE_OPTIONS: "",
                },
            },
            (error, stdout, stderr) => {
                if (error) {
                    reject(error);
                } else {
                    resolve({ stderr, stdout });
                }
            },
        );
    });
};
