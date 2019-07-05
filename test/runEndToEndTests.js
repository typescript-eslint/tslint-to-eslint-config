"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
const path = require("path");
const createTests_1 = require("./createTests");
const testNames = fs.readdirSync(path.join(__dirname, "tests"));
const accept = "acceptTestChanges" in globalThis;
for (const testName of testNames) {
    describe(testName, createTests_1.createTests(testName, accept));
}
//# sourceMappingURL=runEndToEndTests.js.map
