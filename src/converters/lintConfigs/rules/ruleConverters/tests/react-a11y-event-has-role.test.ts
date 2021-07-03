import { convertReactA11yEventHasRole } from "../react-a11y-event-has-role";

describe(convertReactA11yEventHasRole, () => {
    test("conversion without arguments", () => {
        const result = convertReactA11yEventHasRole({
            ruleArguments: [],
        });

        expect(result).toEqual({
            plugins: ["jsx-a11y"],
            rules: [
                {
                    ruleName: "jsx-a11y/no-static-element-interactions",
                },
            ],
        });
    });
});
