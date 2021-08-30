import { mergeBanOperators } from "../ban-operators";

describe(mergeBanOperators, () => {
    test("neither operators existing", () => {
        const result = mergeBanOperators(undefined, undefined);

        expect(result).toEqual([]);
    });

    test("original operators existing", () => {
        const result = mergeBanOperators([{ merge: true }], undefined);

        expect(result).toEqual([{ merge: true }]);
    });

    test("new operator existing", () => {
        const result = mergeBanOperators(undefined, [
            { concat: "Use the concat factory function" },
        ]);

        expect(result).toEqual([{ concat: "Use the concat factory function" }]);
    });

    test("both operators existing", () => {
        const result = mergeBanOperators([{ tap: "No tap" }], [{ share: true, from: false }]);

        expect(result).toEqual([{ tap: "No tap", share: true, from: false }]);
    });
});
