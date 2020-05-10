import { convertTemplateUseTrackByFunction } from "../template-use-track-by-function";

describe(convertTemplateUseTrackByFunction, () => {
    test("conversion without arguments", () => {
        const result = convertTemplateUseTrackByFunction({
            ruleArguments: [],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "@angular-eslint/template-use-track-by-function",
                },
            ],
            plugins: ["@angular-eslint/eslint-plugin"],
        });
    });
});
