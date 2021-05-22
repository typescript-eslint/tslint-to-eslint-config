import { convertNoSmallSwitch } from "../no-small-switch";

describe(convertNoSmallSwitch, () => {
    test("conversion without arguments", () => {
        const result = convertNoSmallSwitch({
            ruleArguments: [],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "sonarjs/no-small-switch",
                },
            ],
            plugins: ["eslint-plugin-sonarjs"],
        });
    });
});
