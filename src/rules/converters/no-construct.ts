import { RuleConverter } from "../converter";

export const convertNoConstruct: RuleConverter = () => {
    return {
        rules: [
            {
                ruleName: "no-construct",
            },
        ],
    };
};
