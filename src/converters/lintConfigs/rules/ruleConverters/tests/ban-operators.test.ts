import { convertBanOperators } from "../ban-operators";

describe(convertBanOperators, () => {
    test("conversion without arguments", () => {
        const result = convertBanOperators({
            ruleArguments: [],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "rxjs/ban-operators",
                },
            ],
            plugins: ["eslint-plugin-rxjs"],
        });
    });

    test("conversion with options", () => {
        const result = convertBanOperators({
            ruleArguments: [{ concat: "Use the concat factory function" }],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "rxjs/ban-operators",
                    ruleArguments: [{ concat: "Use the concat factory function" }],
                },
            ],
            plugins: ["eslint-plugin-rxjs"],
        });
    });
});
