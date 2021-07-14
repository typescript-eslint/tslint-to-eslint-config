import { mergeJsxA11yAltText } from "../jsx-a11y-alt-text";

describe(mergeJsxA11yAltText, () => {
    test("neither options existing", () => {
        const result = mergeJsxA11yAltText(undefined, undefined);

        expect(result).toEqual([]);
    });

    test("original elements existing", () => {
        const result = mergeJsxA11yAltText([{ elements: ["Image"] }], undefined);

        expect(result).toEqual([{ elements: ["Image"] }]);
    });

    test("new elements existing", () => {
        const result = mergeJsxA11yAltText(undefined, [{ elements: ["Image"] }]);

        expect(result).toEqual([{ elements: ["Image"] }]);
    });

    test("both elements existing", () => {
        const result = mergeJsxA11yAltText(
            [{ elements: ["Button", "Image"] }],
            [{ elements: ["Image"] }],
        );

        expect(result).toEqual([{ elements: ["Button", "Image"] }]);
    });
});
