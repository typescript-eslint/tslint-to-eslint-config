import { convertMemberAccess } from "../member-access";

describe(convertMemberAccess, () => {
    test("conversion without arguments", () => {
        const result = convertMemberAccess({
            ruleArguments: [],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "@typescript-eslint/explicit-member-accessibility",
                    ruleArguments: [{ overrides: { constructors: "off" } }],
                },
            ],
        });
    });
});
