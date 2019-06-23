import { RuleConverter } from "../converter";

export const convertNoDebugger: RuleConverter = () => {
    return {
        rules: [
            {
                ruleName: "no-debugger",
            },
        ],
    };
};
