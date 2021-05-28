import { mergeNoUseBeforeDefine } from "../no-use-before-define";

describe(mergeNoUseBeforeDefine, () => {
    test("neither options existing", () => {
        const result = mergeNoUseBeforeDefine(undefined, undefined);

        expect(result).toEqual([]);
    });

    test("original only true flags", () => {
        const result = mergeNoUseBeforeDefine([{ classes: true }], []);

        expect(result).toEqual([]);
    });

    test("new only true flags", () => {
        const result = mergeNoUseBeforeDefine([], [{ classes: true }]);

        expect(result).toEqual([]);
    });

    test("original false flags", () => {
        const result = mergeNoUseBeforeDefine([{ classes: false }], []);

        expect(result).toEqual([
            {
                classes: false,
                enums: true,
                functions: true,
                ignoreTypeReferences: true,
                typedefs: true,
                variables: true,
            },
        ]);
    });

    test("new false flags", () => {
        const result = mergeNoUseBeforeDefine([], [{ classes: false }]);

        expect(result).toEqual([
            {
                classes: false,
                enums: true,
                functions: true,
                ignoreTypeReferences: true,
                typedefs: true,
                variables: true,
            },
        ]);
    });
});
