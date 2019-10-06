import * as fs from "fs";
import * as path from "path";
import { promisify } from "util";

const readdir = promisify(fs.readdir);

export const createTestArgs = async (cwd: string, extraArgs: string[]) => {
    const items = new Set(await readdir(cwd));
    const flags = ["--config", path.join(cwd, ".eslintrc.js")];

    if (items.has("tslint.json")) {
        flags.push("--tslint", path.join(cwd, "tslint.json"));
    }

    return [...flags.map(flag => `"${flag}"`).join(" "), ...extraArgs];
};
