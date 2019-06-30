module.exports = {
    collectCoverageFrom: [
        "./src/**/*.ts",
        "!./src/**/*.d.ts",
        "!./src/cli/main.ts",
        "!./src/stubs.ts",
    ],
    coverageThreshold: {
        global: {
            branches: 100,
            functions: 100,
            lines: 100,
            statements: 100,
        },
    },
    moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
    testRegex: "((\\.|/)test)\\.tsx?$",
    testEnvironment: "node",
};
