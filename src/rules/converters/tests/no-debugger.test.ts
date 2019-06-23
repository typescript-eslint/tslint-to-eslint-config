import { convertNoDebugger } from "../no-debugger";

describe(convertNoDebugger, () => {
    test("conversion without arguments", () => {
        const result = convertNoDebugger({
            ruleArguments: [],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "no-debugger",
                },
            ],
        });
    });
});
