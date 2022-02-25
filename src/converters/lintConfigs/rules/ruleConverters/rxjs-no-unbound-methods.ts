import { RuleConverter } from "../ruleConverter.js";

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
