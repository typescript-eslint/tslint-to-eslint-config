import { mergeJsxNoBind } from "../jsx-no-bind";

describe(mergeJsxNoBind, () => {
    test("neither options existing", () => {
        const result = mergeJsxNoBind(undefined, undefined);

        expect(result).toEqual([]);
    });
});
