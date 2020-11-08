import { convertNoIgnoredReplayBuffer } from "../no-ignored-replay-buffer";

describe(convertNoIgnoredReplayBuffer, () => {
    test("conversion without arguments", () => {
        const result = convertNoIgnoredReplayBuffer({
            ruleArguments: [],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "rxjs/no-ignored-replay-buffer",
                },
            ],
            plugins: ["eslint-plugin-rxjs"],
        });
    });
});
