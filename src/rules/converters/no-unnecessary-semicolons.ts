import { RuleConverter } from "../converter";

export const convertNoUnnecessarySemicolons: RuleConverter = () => {
    return {
        rules: [
            {
                ruleName: "no-extra-semi",
            },
        ],
    };
};
