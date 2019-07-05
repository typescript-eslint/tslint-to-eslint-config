import * as fs from "fs";
import * as path from "path";
import { promisify } from "util";

const readdir = promisify(fs.readdir);

export const createTestArgs = async (cwd: string) => {
    const items = new Set(await readdir(cwd));
    const flags = [
        "--config",
        path.join(cwd, ".eslintrc.json"),
        "--tslint",
        path.join(cwd, "tslint.json"),
    ];

    if (items.has("tslint.json")) {
    }

    return flags.map(flag => `"${flag}"`).join(" ");
};
