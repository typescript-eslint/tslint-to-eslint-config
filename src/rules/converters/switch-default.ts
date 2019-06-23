import { RuleConverter } from "../converter";

export const convertSwitchDefault: RuleConverter = () => {
    return {
        rules: [
            {
                ruleName: "default-case",
            },
        ],
    };
};
