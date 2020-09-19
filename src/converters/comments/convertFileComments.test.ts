import { createStubFileSystem } from "../../adapters/fileSystem.stub";
import { ConversionError } from "../../errors/conversionError";
import { createStubConverter } from "../lintConfigs/rules/ruleConverter.stubs";
import { convertFileComments, ConvertFileCommentsDependencies } from "./convertFileComments";

const createStubDependencies = (
    readFileResult: string | Error,
): ConvertFileCommentsDependencies => ({
    converters: new Map([
        ["ts-a", createStubConverter(["es-a"])],
        ["ts-b", createStubConverter(["es-b1", "es-b2"])],
        ["ts-error", createStubConverter(ConversionError.forMerger("unknown"))],
    ]),
    fileSystem: {
        ...createStubFileSystem(),
        readFile: jest.fn().mockResolvedValueOnce(readFileResult),
    },
});

const stubFileName = "src/index.ts";

describe("convertFileComments", () => {
    it("returns the failure result when reading the file fails", async () => {
        // Arrange
        const readFileError = new Error();
        const dependencies = createStubDependencies(readFileError);

        // Act
        const result = await convertFileComments(dependencies, stubFileName, new Map(), new Map());

        // Assert
        expect(result).toBe(readFileError);
    });

    it("doesn't overwrite a file when there are no matching comment directives", async () => {
        // Arrange
        const dependencies = createStubDependencies(`
// Hello, world!
`);

        // Act
        await convertFileComments(dependencies, stubFileName, new Map(), new Map());

        // Assert
        expect(dependencies.fileSystem.writeFile).not.toHaveBeenCalled();
    });

    it("parses TSLint directives to their matching ESLint directives", async () => {
        // Arrange
        const dependencies = createStubDependencies(`
// tslint:disable
export const a = true;

// tslint:disable-next-line
export const b = true;

// tslint:enable
export const c = true;

export const d = true; // tslint:disable-line

/* tslint:disable */
export const e = true;

/* tslint:disable-next-line */
export const f = true;

/* tslint:enable */
export const g = true;
`);

        // Act
        await convertFileComments(dependencies, stubFileName, new Map(), new Map());

        // Assert
        expect(dependencies.fileSystem.writeFile).toHaveBeenCalledWith(
            stubFileName,
            `
/* eslint-disable */
export const a = true;

// eslint-disable-next-line
export const b = true;

/* eslint-enable */
export const c = true;

export const d = true; // eslint-disable-line

/* eslint-disable */
export const e = true;

/* eslint-disable-next-line */
export const f = true;

/* eslint-enable */
export const g = true;
`,
        );
    });

    it("parses rule names when they exist", async () => {
        // Arrange
        const dependencies = createStubDependencies(`
/* tslint:disable:ts-a */
export const a = true;

// tslint:disable-next-line: ts-a ts-b
export const b = true;
`);

        // Act
        await convertFileComments(dependencies, stubFileName, new Map(), new Map());

        // Assert
        expect(dependencies.fileSystem.writeFile).toHaveBeenCalledWith(
            stubFileName,
            `
/* eslint-disable es-a */
export const a = true;

// eslint-disable-next-line es-a, es-b1, es-b2
export const b = true;
`,
        );
    });

    it("re-uses a rule conversion from conversion cache when it was already converted", async () => {
        // Arrange
        const dependencies = createStubDependencies(`
/* tslint:disable:ts-a */
export const a = true;
`);

        // Act
        await convertFileComments(
            dependencies,
            stubFileName,
            new Map(),
            new Map([["ts-a", ["es-cached"]]]),
        );

        // Assert
        expect(dependencies.fileSystem.writeFile).toHaveBeenCalledWith(
            stubFileName,
            `
/* eslint-disable es-cached */
export const a = true;
`,
        );
    });

    it("re-uses a rule conversion from comments cache when it was already converted", async () => {
        // Arrange
        const dependencies = createStubDependencies(`
/* tslint:disable:ts-a */
export const a = true;
`);

        // Act
        await convertFileComments(
            dependencies,
            stubFileName,
            new Map([["ts-a", ["es-cached"]]]),
            new Map(),
        );

        // Assert
        expect(dependencies.fileSystem.writeFile).toHaveBeenCalledWith(
            stubFileName,
            `
/* eslint-disable es-cached */
export const a = true;
`,
        );
    });

    it("ignores comment text when there is no matching converter", async () => {
        // Arrange
        const dependencies = createStubDependencies(`
/* tslint:disable:ts-z */
export const a = true;
`);

        // Act
        await convertFileComments(dependencies, stubFileName, new Map(), new Map());

        // Assert
        expect(dependencies.fileSystem.writeFile).toHaveBeenCalledWith(
            stubFileName,
            `
/* eslint-disable */
export const a = true;
`,
        );
    });

    it("ignores comment text when its matching converter results in an error", async () => {
        // Arrange
        const dependencies = createStubDependencies(`
/* tslint:disable:ts-error */
export const a = true;
`);

        // Act
        await convertFileComments(dependencies, stubFileName, new Map(), new Map());

        // Assert
        expect(dependencies.fileSystem.writeFile).toHaveBeenCalledWith(
            stubFileName,
            `
/* eslint-disable */
export const a = true;
`,
        );
    });
});
