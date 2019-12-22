module.exports = {
    env: {
        es6: true,
        node: true,
    },
    extends: ["plugin:@typescript-eslint/all", "prettier", "prettier/@typescript-eslint"],
    overrides: [
        {
            files: ["*.stubs.ts", "*.test.ts"],
            rules: {
                "@typescript-eslint/promise-function-async": "off",
            },
        },
    ],
    parser: "@typescript-eslint/parser",
    parserOptions: {
        project: "tsconfig.json",
    },
    plugins: ["@typescript-eslint"],
    rules: {
        "@typescript-eslint/consistent-type-definitions": ["error", "type"],
        "@typescript-eslint/explicit-function-return-type": "off",
        "@typescript-eslint/generic-type-naming": "off",
        "@typescript-eslint/no-explicit-any": "off",
        "@typescript-eslint/no-magic-numbers": "off",
        "@typescript-eslint/no-parameter-properties": "off",
        "@typescript-eslint/no-type-alias": "off",
        "@typescript-eslint/no-unnecessary-condition": "off",
        "@typescript-eslint/no-untyped-public-signature": "off",
        "@typescript-eslint/no-use-before-define": "off",
        "@typescript-eslint/require-await": "off",
        "@typescript-eslint/restrict-template-expressions": "off",
        "@typescript-eslint/return-await": "off",
        "@typescript-eslint/strict-boolean-expressions": "off",
        "@typescript-eslint/typedef": "off",
        "no-else-return": "error",
    },
};
