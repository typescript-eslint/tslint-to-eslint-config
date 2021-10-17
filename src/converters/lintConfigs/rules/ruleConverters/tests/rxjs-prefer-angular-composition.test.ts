import { convertRxjsPreferAngularComposition } from "../rxjs-prefer-angular-composition";

describe(convertRxjsPreferAngularComposition, () => {
    test("conversion without arguments", () => {
        const result = convertRxjsPreferAngularComposition({
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
