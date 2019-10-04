import { RuleConverter } from "../converter";

export const convertNoAsyncWithoutAwait: RuleConverter = () => {
    return {
        rules: [
            {
                ruleName: "require-await",
            },
        ],
    };
};
