module.exports = {
    collectCoverageFrom: [
        "./src/**/*.ts",
        "!./src/**/*.d.ts",
        "!./src/**/*.stubs.ts",
        "!./src/adapters/*.ts",
        "!./src/api/*.ts",
        "!./src/cli/main.ts",
        "!./src/converters/editorConfigs/editorSettingsConverters.ts",
        "!./src/converters/lintConfigs/rules/ruleConverters.ts",
        "!./src/converters/lintConfigs/rules/ruleMergers.ts",
        "!./src/index.ts",
    ],
    coverageThreshold: {
        global: {
            branches: 100,
            functions: 100,
            lines: 100,
            statements: 100,
        },
    },
    extensionsToTreatAsEsm: [".ts"],
    moduleFileExtensions: ["ts", "tsx", "js", "jsx", "node", "mjs", "cjs"],
    moduleNameMapper: {
        chalk: "chalk/source/index.js",
        "#ansi-styles": "chalk/source/vendor/ansi-styles/index.js",
        "#supports-color": "chalk/source/vendor/supports-color/index.js",
    },
    testRegex: "src(.*)\\.test\\.tsx?$",
    testEnvironment: "node",
    transform: {
        "^.+\\.(t|j)s$": ["@swc/jest"],
    },
};
