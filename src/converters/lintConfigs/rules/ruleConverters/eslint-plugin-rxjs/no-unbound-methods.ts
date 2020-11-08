import { RuleConverter } from "../../ruleConverter";

export const convertNoUnboundMethods: RuleConverter = () => {
    return {
        rules: [
            {
                ruleName: "rxjs/no-unbound-methods",
            },
        ],
        plugins: ["eslint-plugin-rxjs"],
    };
};
