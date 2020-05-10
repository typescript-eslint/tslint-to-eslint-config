import { RuleConverter } from "../../converter";

export const convertNoOutputsMetadataProperty: RuleConverter = () => {
    return {
        rules: [
            {
                ruleName: "@angular-eslint/no-outputs-metadata-property",
            },
        ],
        plugins: ["@angular-eslint/eslint-plugin"],
    };
};
