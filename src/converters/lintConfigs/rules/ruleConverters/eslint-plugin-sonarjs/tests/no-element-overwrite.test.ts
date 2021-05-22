import { convertNoElementOverwrite } from "../no-element-overwrite";

describe(convertNoElementOverwrite, () => {
    test("conversion without arguments", () => {
        const result = convertNoElementOverwrite({
            ruleArguments: [],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "sonarjs/no-element-overwrite",
                },
            ],
            plugins: ["eslint-plugin-sonarjs"],
        });
    });
});
