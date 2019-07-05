"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
const path = require("path");
const util_1 = require("util");
const readdir = util_1.promisify(fs.readdir);
exports.createTestArgs = async cwd => {
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
//# sourceMappingURL=createTestArgs.js.map
