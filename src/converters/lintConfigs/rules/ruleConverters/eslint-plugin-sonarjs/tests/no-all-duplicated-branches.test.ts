import { convertNoAllDuplicatedBranches } from "../no-all-duplicated-branches";

describe(convertNoAllDuplicatedBranches, () => {
    test("conversion without arguments", () => {
        const result = convertNoAllDuplicatedBranches({
            ruleArguments: [],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "sonarjs/no-all-duplicated-branches",
                },
            ],
            plugins: ["sonarjs"],
        });
    });
});
