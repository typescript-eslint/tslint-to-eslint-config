import { RuleConverter } from "../../converter";

export const convertNoInputsMetadataProperty: RuleConverter = () => {
    return {
        rules: [
            {
                ruleName: "@angular-eslint/no-inputs-metadata-property",
            },
        ],
        plugins: ["@angular-eslint/eslint-plugin"],
    };
};
