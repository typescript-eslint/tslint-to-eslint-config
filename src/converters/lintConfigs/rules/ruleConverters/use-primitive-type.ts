import { RuleConverter } from "../ruleConverter.js";

export const convertUsePrimitiveType: RuleConverter = () => {
    return {
        rules: [
            {
                ruleName: "no-new-wrappers",
            },
            {
                ruleArguments: [
                    {
                        types: {
                            String: {
                                message: "Use string instead",
                                fixWith: "string",
                            },
                            Boolean: {
                                message: "Use boolean instead",
                                fixWith: "boolean",
                            },
                            Number: {
                                message: "Use number instead",
                                fixWith: "number",
                            },
                        },
                    },
                ],
                ruleName: "@typescript-eslint/ban-types",
            },
        ],
    };
};
