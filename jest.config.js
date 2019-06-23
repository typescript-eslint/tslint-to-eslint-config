module.exports = {
    collectCoverageFrom: [
        "./src/**/*.ts",
        "!./src/**/*.d.ts",
        "!./src/cli/main.ts",
        "!./src/stubs.ts",
    ],
    globals: {
        "ts-jest": {
            diagnostics: false,
        },
    },
    moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
    preset: "ts-jest",
    testRegex: "((\\.|/)test)\\.tsx?$",
    testEnvironment: "node",
    transform: {
        "^.+\\.tsx?$": "ts-jest",
    },
};
