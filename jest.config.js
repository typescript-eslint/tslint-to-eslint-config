module.exports = {
    collectCoverageFrom: [
        "./src/**/*.ts",
        "!./src/**/*.d.ts",
        "!./src/**/*.stubs.ts",
        "!./src/adapters/*.ts",
        "!./src/cli/main.ts",
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
