import * as fs from "fs";
import * as path from "path";

import { createTests } from "./createTests";

const testNames = fs.readdirSync(path.join(__dirname, "tests"));

const accept = "acceptTestChanges" in globalThis;

for (const testName of testNames) {
    describe(testName, createTests(testName, accept));
}
