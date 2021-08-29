import { convertReactA11yNoOnchange } from "../react-a11y-no-onchange";

describe(convertReactA11yNoOnchange, () => {
    test("conversion without arguments", () => {
        const result = convertReactA11yNoOnchange({
            ruleArguments: [],
        });

        expect(result).toEqual({});
    });
});
