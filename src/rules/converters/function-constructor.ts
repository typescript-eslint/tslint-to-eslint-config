import { RuleConverter } from "../converter";

export const convertFunctionConstructor: RuleConverter = () => {
    return {
        rules: [
            {
                ruleName: "no-new-func",
            },
        ],
    };
};
