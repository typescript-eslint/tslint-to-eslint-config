import { mergeNoMemberDelimiterStyle } from "../member-delimiter-style";

describe(mergeNoMemberDelimiterStyle, () => {
    test("neither options existing", () => {
        const result = mergeNoMemberDelimiterStyle(undefined, undefined);

        expect(result).toEqual([]);
    });

    test("new object config existing", () => {
        const result = mergeNoMemberDelimiterStyle(undefined, [
            {
                multiline: {
                    delimiter: "semi",
                    requireLast: true,
                },
                singleline: {
                    delimiter: "semi",
                    requireLast: false,
                },
            },
        ]);

        expect(result).toEqual([
            {
                multiline: {
                    delimiter: "semi",
                    requireLast: true,
                },
                singleline: {
                    delimiter: "semi",
                    requireLast: false,
                },
            },
        ]);
    });

    test("original object config existing", () => {
        const result = mergeNoMemberDelimiterStyle(
            [
                {
                    multiline: {
                        delimiter: "semi",
                        requireLast: true,
                    },
                },
            ],
            undefined,
        );

        expect(result).toEqual([
            {
                multiline: {
                    delimiter: "semi",
                    requireLast: true,
                },
            },
        ]);
    });

    test("both object config existing", () => {
        const result = mergeNoMemberDelimiterStyle(
            [
                {
                    singleline: {
                        delimiter: "semi",
                        requireLast: false,
                    },
                },
            ],
            [
                {
                    singleline: {
                        delimiter: "semi",
                        requireLast: false,
                    },
                    multiline: {
                        delimiter: "semi",
                        requireLast: true,
                    },
                },
            ],
        );

        expect(result).toEqual([
            {
                multiline: {
                    delimiter: "semi",
                    requireLast: true,
                },
                singleline: {
                    delimiter: "semi",
                    requireLast: false,
                },
            },
        ]);
    });
});
