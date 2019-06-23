import { convertNoConsole } from "../no-console";

describe(convertNoConsole, () => {
    test("conversion without arguments", () => {
        const result = convertNoConsole({
            ruleArguments: [],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "no-console",
                },
            ],
        });
    });

    test("conversion with whitelist names", () => {
        const result = convertNoConsole({
            ruleArguments: ["info", "log"],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleArguments: [{ allow: ["info", "log"] }],
                    ruleName: "no-console",
                },
            ],
        });
    });
});
