import { convertNoExecScript } from "../no-exec-script";

describe(convertNoExecScript, () => {
    test("conversion without arguments", () => {
        const result = convertNoExecScript({
            ruleArguments: [],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleArguments: [
                        {
                            message: "Forbidden call to execScript",
                            selector: 'CallExpression[callee.name="execScript"]',
                        }
                    ],
                    ruleName: "restricted-syntax",
                },
            ],
        });
    });
});
