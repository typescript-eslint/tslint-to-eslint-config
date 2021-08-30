import { convertSelectorForSelect } from "../selector-for-select";

describe(convertSelectorForSelect, () => {
    test("conversion without arguments", () => {
        const result = convertSelectorForSelect({
            ruleArguments: [],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "ngrx/use-selector-in-select",
                },
            ],
            plugins: ["eslint-plugin-ngrx"],
        });
    });
});
