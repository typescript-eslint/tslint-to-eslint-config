import { RuleConverter } from "../../converter";

export const convertClassMethodNewlines: RuleConverter = () => {
    return {
        rules: [
            {
                ruleName: "lines-between-class-members",
                ruleArguments: [
                    "error",
                    {
                        enforce: [
                            {
                                blankLine: "always",
                                prev: "method",
                                next: "method",
                            },
                        ],
                    },
                ],
            },
        ],
    };
};
