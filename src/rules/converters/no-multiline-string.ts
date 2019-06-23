import { RuleConverter } from "../converter";

export const convertNoMultilineString: RuleConverter = () => {
    return {
        rules: [
            {
                ruleName: "no-multi-str",
            },
        ],
    };
};
