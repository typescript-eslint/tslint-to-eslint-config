import { convertPreferAngularComposition } from "../prefer-angular-composition";

describe(convertPreferAngularComposition, () => {
    test("conversion without arguments", () => {
        const result = convertPreferAngularComposition({
            ruleArguments: [],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "prefer-composition",
                },
            ],
            plugins: ["rxjs-angular"],
        });
    });
});
