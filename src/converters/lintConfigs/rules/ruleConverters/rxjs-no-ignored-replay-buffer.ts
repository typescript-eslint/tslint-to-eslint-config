import { RuleConverter } from "../ruleConverter";

export const convertRxjsNoIgnoredReplayBuffer: RuleConverter = () => {
    return {
        rules: [
            {
                ruleName: "rxjs/no-ignored-replay-buffer",
            },
        ],
        plugins: ["eslint-plugin-rxjs"],
    };
};
