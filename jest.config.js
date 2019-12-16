module.exports = {
    collectCoverageFrom: [
        "./src/**/*.ts",
        "!./src/**/*.d.ts",
        "!./src/**/*.stubs.ts",
        "!./src/adapters/*.ts",
        "!./src/rules/rulesConverters.ts",
        "!./src/editorSettings/editorSettingsConverters.ts",
        "!./src/rules/mergers.ts",
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
    testRegex: "src(.*)\\.test\\.tsx?$",
    testEnvironment: "node",
};
