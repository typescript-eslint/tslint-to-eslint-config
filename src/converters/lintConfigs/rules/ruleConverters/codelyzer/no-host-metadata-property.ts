import { RuleConverter } from "../../ruleConverter";

export const convertNoHostMetadataProperty: RuleConverter = () => {
    return {
        rules: [
            {
                ruleName: "@angular-eslint/no-host-metadata-property",
            },
        ],
        plugins: ["@angular-eslint/eslint-plugin"],
    };
};
