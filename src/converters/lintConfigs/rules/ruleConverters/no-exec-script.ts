import { RuleConverter } from "../ruleConverter.js";

export const convertNoExecScript: RuleConverter = () => {
    return {
        rules: [
            {
                ruleArguments: [
                    {
                        message: "Forbidden call to execScript",
                        selector: 'CallExpression[callee.name="execScript"]',
                    },
                ],
                ruleName: "no-restricted-syntax",
            },
        ],
    };
};
