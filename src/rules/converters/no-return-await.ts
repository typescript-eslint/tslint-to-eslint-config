import { RuleConverter } from "../converter";

export const convertNoReturnAwait: RuleConverter = () => {
    return {
        rules: [
            {
                ruleName: "no-return-await",
            },
        ],
    };
};
