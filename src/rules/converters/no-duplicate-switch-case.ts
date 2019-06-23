import { RuleConverter } from "../converter";

export const convertNoDuplicateSwitchCase: RuleConverter = () => {
    return {
        rules: [
            {
                ruleName: "no-duplicate-case",
            },
        ],
    };
};
