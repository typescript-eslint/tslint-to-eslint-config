import { convertNoParameterReassignment } from "../no-parameter-reassignment";

describe(convertNoParameterReassignment, () => {
    test("conversion without arguments", () => {
        const result = convertNoParameterReassignment({
            ruleArguments: [],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "@typescript-eslint/no-param-reassign",
                },
            ],
        });
    });
});
