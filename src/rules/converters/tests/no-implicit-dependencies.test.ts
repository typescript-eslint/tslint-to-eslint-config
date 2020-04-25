import { convertNoImplicitDependencies } from "../no-implicit-dependencies";

describe(convertNoImplicitDependencies, () => {
    test("conversion without arguments", () => {
        const result = convertNoImplicitDependencies({
            ruleArguments: [],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "import/no-extraneous-dependencies",
                },
            ],
            plugins: ["eslint-plugin-import"],
        });
    });

    test("conversion with dev argument", () => {
        const result = convertNoImplicitDependencies({
            ruleArguments: ["dev"],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleArguments: [{ devDependencies: false }],
                    ruleName: "import/no-extraneous-dependencies",
                },
            ],
            plugins: ["eslint-plugin-import"],
        });
    });

    test("conversion with optional argument", () => {
        const result = convertNoImplicitDependencies({
            ruleArguments: ["optional"],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleArguments: [{ optionalDependencies: false }],
                    ruleName: "import/no-extraneous-dependencies",
                },
            ],
            plugins: ["eslint-plugin-import"],
        });
    });

    test("conversion with both dev and optional argument", () => {
        const result = convertNoImplicitDependencies({
            ruleArguments: ["dev", "optional"],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleArguments: [{ devDependencies: false }, { optionalDependencies: false }],
                    ruleName: "import/no-extraneous-dependencies",
                },
            ],
            plugins: ["eslint-plugin-import"],
        });
    });

    test("conversion with whitelisted folders argument", () => {
        const result = convertNoImplicitDependencies({
            ruleArguments: [["src", "app"]],
        });

        expect(result).toEqual({
            rules: [
                {
                    notices: ["ESLint does not support whitelisting modules"],
                    ruleName: "import/no-extraneous-dependencies",
                },
            ],
            plugins: ["eslint-plugin-import"],
        });
    });
});
