import { RuleConverter } from "../converter";

export const convertNoSwitchCaseFallThrough: RuleConverter = () => {
    return {
        rules: [
            {
                ruleName: "no-fallthrough",
            },
        ],
    };
};
