import { parseFileComments } from "./parseFileComments";

const stubFilePath = "src/index.ts";

describe("parseFileComments", () => {
    it("ignores a comment when it doesn't contain a directive", () => {
        // Arrange
        const content = `
            // Hello, world!
        `;

        // Act
        const comments = parseFileComments(stubFilePath, content);

        // Assert
        expect(comments).toEqual([]);
    });

    it("parses TSLint directives to their matching ESLint directives", () => {
        // Arrange
        const content = `
            // tslint:disable
            export const a = true;
            
            // tslint:disable-next-line
            export const b = true;
            
            // tslint:enable
            export const c = true;
            
            // tslint:enable-next-line
            export const d = true;
        `;

        // Act
        const comments = parseFileComments(stubFilePath, content);

        // Assert
        expect(comments).toMatchInlineSnapshot(`
            Array [
              Object {
                "commentKind": 2,
                "directive": "tslint:disable",
                "end": 30,
                "pos": 13,
                "ruleNames": Array [],
              },
              Object {
                "commentKind": 2,
                "directive": "tslint:disable-next-line",
                "end": 118,
                "pos": 91,
                "ruleNames": Array [],
              },
              Object {
                "commentKind": 2,
                "directive": "tslint:enable",
                "end": 195,
                "pos": 179,
                "ruleNames": Array [],
              },
              Object {
                "commentKind": 2,
                "directive": "tslint:enable-next-line",
                "end": 282,
                "pos": 256,
                "ruleNames": Array [],
              },
            ]
        `);
    });
});
