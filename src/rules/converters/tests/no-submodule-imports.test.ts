import { convertNoSubmoduleImports } from "../no-submodule-imports";

describe(convertNoSubmoduleImports, () => {
    test("conversion without arguments", () => {
        const result = convertNoSubmoduleImports({
            ruleArguments: [],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "import/no-internal-modules",
                },
            ],
            plugins: ["eslint-plugin-import"],
        });
    });

    test("conversion with arguments", () => {
        const result = convertNoSubmoduleImports({
            ruleArguments: [true, "rxjs"],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "import/no-internal-modules",
                    ruleArguments: [{ allow: [true, "rxjs"] }],
                },
            ],
            plugins: ["eslint-plugin-import"],
        });
    });
});
