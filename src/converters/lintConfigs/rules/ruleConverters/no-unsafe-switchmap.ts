import { RuleConverter } from "../ruleConverter";

export const convertNoUnsafeSwitchmap: RuleConverter = ({ ruleArguments }) => {
    return {
        rules: [
            {
                ...(ruleArguments.length !== 0 && { ruleArguments }),
                ruleName: "rxjs/no-unsafe-switchmap",
            },
        ],
        plugins: ["eslint-plugin-rxjs"],
    };
};
