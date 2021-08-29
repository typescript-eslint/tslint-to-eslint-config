import { convertPreferAngularTakeuntil } from "../prefer-angular-takeuntil";

describe(convertPreferAngularTakeuntil, () => {
    test("conversion without arguments", () => {
        const result = convertPreferAngularTakeuntil({
            ruleArguments: [],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "prefer-takeuntil",
                },
            ],
            plugins: ["rxjs-angular"],
        });
    });

    test("conversion with `alias` argument", () => {
        const result = convertPreferAngularTakeuntil({
            ruleArguments: [{ alias: ["untilDestroyed"] }],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "prefer-takeuntil",
                    ruleArguments: [{ alias: ["untilDestroyed"] }],
                },
            ],
            plugins: ["rxjs-angular"],
        });
    });

    test("conversion with `checkComplete` argument", () => {
        const result = convertPreferAngularTakeuntil({
            ruleArguments: [{ checkComplete: true }],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "prefer-takeuntil",
                    ruleArguments: [{ checkComplete: true }],
                },
            ],
            plugins: ["rxjs-angular"],
        });
    });

    test("conversion with `checkDecorators` argument", () => {
        const result = convertPreferAngularTakeuntil({
            ruleArguments: [{ checkDecorators: ["Component"] }],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "prefer-takeuntil",
                    ruleArguments: [{ checkDecorators: ["Component"] }],
                },
            ],
            plugins: ["rxjs-angular"],
        });
    });
});
