import { RuleConverter } from "../converter";

export const convertNoDuplicateSuper: RuleConverter = () => {
    return {
        rules: [
            {
                ruleName: "constructor-super",
            },
        ],
    };
};
