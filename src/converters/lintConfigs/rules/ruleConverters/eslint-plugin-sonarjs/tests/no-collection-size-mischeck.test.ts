import { convertNoCollectionSizeMischeck } from "../no-collection-size-mischeck";

describe(convertNoCollectionSizeMischeck, () => {
    test("conversion without arguments", () => {
        const result = convertNoCollectionSizeMischeck({
            ruleArguments: [],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "sonarjs/no-collection-size-mischeck",
                },
            ],
            plugins: ["eslint-plugin-sonarjs"],
        });
    });
});
