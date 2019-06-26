import { mergeNoUnnecessaryTypeAssertion } from "../no-unnecessary-type-assertion";

describe(mergeNoUnnecessaryTypeAssertion, () => {
    test("neither options existing", () => {
        const result = mergeNoUnnecessaryTypeAssertion(undefined, undefined);

        expect(result).toEqual([]);
    });

    test("neither typesToIgnore existing", () => {
        const result = mergeNoUnnecessaryTypeAssertion([{}], [{}]);

        expect(result).toEqual([{}]);
    });

    test("original typesToIgnore existing but empty", () => {
        const result = mergeNoUnnecessaryTypeAssertion([{ typesToIgnore: [] }], undefined);

        expect(result).toEqual([{ typesToIgnore: [] }]);
    });

    test("original typesToIgnore existing", () => {
        const result = mergeNoUnnecessaryTypeAssertion(
            [{ typesToIgnore: ["original"] }],
            undefined,
        );

        expect(result).toEqual([{ typesToIgnore: ["original"] }]);
    });

    test("new typesToIgnore existing but empty", () => {
        const result = mergeNoUnnecessaryTypeAssertion(undefined, [{ typesToIgnore: [] }]);

        expect(result).toEqual([{ typesToIgnore: [] }]);
    });

    test("new typesToIgnore existing", () => {
        const result = mergeNoUnnecessaryTypeAssertion(undefined, [{ typesToIgnore: ["new"] }]);

        expect(result).toEqual([{ typesToIgnore: ["new"] }]);
    });

    test("both typesToIgnore existing but empty", () => {
        const result = mergeNoUnnecessaryTypeAssertion(
            [{ typesToIgnore: [] }],
            [{ typesToIgnore: [] }],
        );

        expect(result).toEqual([{ typesToIgnore: [] }]);
    });

    test("both typesToIgnore existing", () => {
        const result = mergeNoUnnecessaryTypeAssertion(
            [{ typesToIgnore: ["original"] }],
            [{ typesToIgnore: ["new"] }],
        );

        expect(result).toEqual([{ typesToIgnore: ["original", "new"] }]);
    });
});
