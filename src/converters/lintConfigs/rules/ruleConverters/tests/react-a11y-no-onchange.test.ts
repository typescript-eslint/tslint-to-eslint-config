import { describe, expect, test } from "@jest/globals";

import { convertReactA11yNoOnchange } from "../react-a11y-no-onchange.js";

describe("convertReactA11yNoOnchange", () => {
    test("conversion without arguments", () => {
        const result = convertReactA11yNoOnchange({
            ruleArguments: [],
        });

        expect(result).toEqual({});
    });
});
