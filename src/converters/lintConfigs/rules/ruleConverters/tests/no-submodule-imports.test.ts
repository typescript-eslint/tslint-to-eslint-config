import { convertNoSubmoduleImports } from "../no-submodule-imports";

describe(convertNoSubmoduleImports, () => {
    test("conversion without arguments", () => {
        const result = convertNoSubmoduleImports({
            ruleArguments: [],
        });

        expect(result).toEqual({
            plugins: ["eslint-plugin-import"],
            rules: [
                {
                    ruleName: "import/no-internal-modules",
                },
            ],
        });
    });

    test("conversion with arguments", () => {
        const result = convertNoSubmoduleImports({
            ruleArguments: [true, "rxjs"],
        });

        expect(result).toEqual({
            plugins: ["eslint-plugin-import"],
            rules: [
                {
                    ruleArguments: [{ allow: ["rxjs/*"] }],
                    ruleName: "import/no-internal-modules",
                },
            ],
        });
    });
});
