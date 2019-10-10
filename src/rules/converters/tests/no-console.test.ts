import { convertNoConsole } from "../no-console";

const consoleKeysExcluding = (...keys: string[]) => {
    const knownConsoleKeys = new Set(Object.keys(console));

    for (const key of keys) {
        knownConsoleKeys.delete(key);
    }

    return Array.from(knownConsoleKeys);
};

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
                    notices: ["Custom console methods, if they exist, will no longer be allowed."],
                    ruleArguments: [{ allow: consoleKeysExcluding("info", "log") }],
                    ruleName: "no-console",
                },
            ],
        });
    });
});
