import { RuleConverter } from "../../ruleConverter";

export const convertNoUnsafeCatch: RuleConverter = ({ ruleArguments }) => {
    return {
        rules: [
            {
                ...(ruleArguments.length !== 0 && { ruleArguments }),
                ruleName: "rxjs/no-unsafe-catch",
            },
        ],
        plugins: ["eslint-plugin-rxjs"],
    };
};
