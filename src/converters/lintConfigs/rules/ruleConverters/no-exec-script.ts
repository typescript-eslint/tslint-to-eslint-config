import { RuleConverter } from "../ruleConverter";

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
                ruleName: "restricted-syntax",
            },
        ],
    };
};
