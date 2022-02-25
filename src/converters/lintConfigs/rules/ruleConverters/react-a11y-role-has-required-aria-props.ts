import { RuleConverter } from "../ruleConverter.js";

export const convertReactA11yRoleHasRequiredAriaProps: RuleConverter = () => {
    return {
        plugins: ["jsx-a11y"],
        rules: [
            {
                ruleName: "jsx-a11y/role-has-required-aria-props",
            },
        ],
    };
};
