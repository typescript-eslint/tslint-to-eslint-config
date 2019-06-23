import { RuleConverter } from "../converter";

export const convertUseIsnan: RuleConverter = () => {
    return {
        rules: [
            {
                ruleName: "use-isnan",
            },
        ],
    };
};
