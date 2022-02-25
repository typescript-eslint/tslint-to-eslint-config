import { RuleConverter } from "../ruleConverter.js";

export const convertReactA11yRoleSupportsAriaProps: RuleConverter = () => {
    return {
        plugins: ["jsx-a11y"],
        rules: [
            {
                ruleName: "jsx-a11y/role-supports-aria-props",
            },
        ],
    };
};
