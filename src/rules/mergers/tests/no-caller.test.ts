import { mergeNoCaller } from "../no-caller";

describe(mergeNoCaller, () => {
    test("neither options existing", () => {
        const result = mergeNoCaller(undefined, undefined);

        expect(result).toEqual([]);
    });
});
