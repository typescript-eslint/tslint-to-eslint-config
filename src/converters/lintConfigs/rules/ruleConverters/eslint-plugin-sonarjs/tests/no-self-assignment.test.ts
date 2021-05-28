import { convertNoSelfAssignment } from "../no-self-assignment";

describe(convertNoSelfAssignment, () => {
    test("conversion without arguments", () => {
        const result = convertNoSelfAssignment({
            ruleArguments: [],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "no-self-assign",
                },
            ],
        });
    });
});
