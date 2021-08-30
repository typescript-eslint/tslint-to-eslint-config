import { RuleConverter } from "../ruleConverter";

export const convertNoIgnoredReplayBuffer: RuleConverter = () => {
    return {
        rules: [
            {
                ruleName: "rxjs/no-ignored-replay-buffer",
            },
        ],
        plugins: ["eslint-plugin-rxjs"],
    };
};
