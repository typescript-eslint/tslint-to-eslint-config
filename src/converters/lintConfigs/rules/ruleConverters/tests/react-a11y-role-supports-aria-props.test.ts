import { convertReactA11yRoleSupportsAriaProps } from "../react-a11y-role-supports-aria-props";

describe(convertReactA11yRoleSupportsAriaProps, () => {
    test("conversion without arguments", () => {
        const result = convertReactA11yRoleSupportsAriaProps({
            ruleArguments: [],
        });

        expect(result).toEqual({
            plugins: ["jsx-a11y"],
            rules: [
                {
                    ruleName: "jsx-a11y/role-supports-aria-props",
                },
            ],
        });
    });
});
