import { RuleConverter } from "../ruleConverter";

export const convertRxjsNoUnboundMethods: RuleConverter = () => {
    return {
        rules: [
            {
                ruleName: "rxjs/no-unbound-methods",
            },
        ],
        plugins: ["eslint-plugin-rxjs"],
    };
};
