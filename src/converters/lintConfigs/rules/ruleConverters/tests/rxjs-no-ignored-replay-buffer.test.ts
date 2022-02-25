import { describe, expect, test } from "@jest/globals";

import { convertRxjsNoIgnoredReplayBuffer } from "../rxjs-no-ignored-replay-buffer.js";

describe("convertRxjsNoIgnoredReplayBuffer", () => {
    test("conversion without arguments", () => {
        const result = convertRxjsNoIgnoredReplayBuffer({
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
