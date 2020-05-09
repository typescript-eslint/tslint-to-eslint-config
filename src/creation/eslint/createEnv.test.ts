import { createEnv } from "./createEnv";
import { TypeScriptConfiguration } from "../../input/findTypeScriptConfiguration";

const createTypeScriptCompilerOptions = (
    overrides: Partial<TypeScriptConfiguration["compilerOptions"]> = {},
) => ({
    target: "es3",
    ...overrides,
});

describe("createEnv", () => {
    it("returns node, browser, and es6 as true if typescript is undefined", () => {
        // Arrange
        const packages = undefined;
        const typescript = undefined;

        // Act
        const env = createEnv({ packages, typescript });

        // Assert
        expect(env).toEqual(
            expect.objectContaining({
                browser: true,
                es6: true,
                node: true,
            }),
        );
    });

    it("returns browser as true if no typescript libs are provided", () => {
        // Arrange
        const packages = undefined;
        const typescript = {
            compilerOptions: createTypeScriptCompilerOptions(),
        };

        // Act
        const env = createEnv({ packages, typescript });

        // Assert
        expect(env).toEqual(
            expect.objectContaining({
                browser: true,
            }),
        );
    });

    it("returns browser as false if typescript libs don't include dom", () => {
        // Arrange
        const packages = undefined;
        const typescript = {
            compilerOptions: createTypeScriptCompilerOptions({
                lib: ["esnext"],
            }),
        };

        // Act
        const env = createEnv({ packages, typescript });

        // Assert
        expect(env).not.toContain({
            browser: expect.any(Boolean),
        });
    });

    it("returns browser as true if a typescript lib is dom", () => {
        // Arrange
        const packages = undefined;
        const typescript = {
            compilerOptions: createTypeScriptCompilerOptions({
                lib: ["dom"],
            }),
        };

        // Act
        const env = createEnv({ packages, typescript });

        // Assert
        expect(env).toEqual(
            expect.objectContaining({
                browser: true,
            }),
        );
    });

    it("returns es6 as false if the typescript target is lower than es6", () => {
        // Arrange
        const packages = undefined;
        const typescript = {
            compilerOptions: createTypeScriptCompilerOptions({
                target: "es5",
            }),
        };

        // Act
        const env = createEnv({ packages, typescript });

        // Assert
        expect(env).not.toEqual(
            expect.objectContaining({
                es6: expect.any(Boolean),
            }),
        );
    });

    it("returns es6 as true if the typescript target includes es6", () => {
        // Arrange
        const packages = undefined;
        const typescript = {
            compilerOptions: createTypeScriptCompilerOptions({
                target: "es2015",
            }),
        };

        // Act
        const env = createEnv({ packages, typescript });

        // Assert
        expect(env).toEqual(
            expect.objectContaining({
                es6: true,
            }),
        );
    });

    it("returns node as false if package dependencies and devDependencies don't include @types/node", () => {
        // Arrange
        const packages = {
            dependencies: {},
            devDependencies: {
                "@types/other": "1.2.3",
            },
        };
        const typescript = undefined;

        // Act
        const env = createEnv({ packages, typescript });

        // Assert
        expect(env).not.toEqual(
            expect.objectContaining({
                node: expect.any(Boolean),
            }),
        );
    });

    it("returns node as true if package dependencies include @types/node", () => {
        // Arrange
        const packages = {
            dependencies: {
                "@types/node": "1.2.3",
            },
            devDependencies: {},
        };
        const typescript = undefined;

        // Act
        const env = createEnv({ packages, typescript });

        // Assert
        expect(env).toEqual(
            expect.objectContaining({
                node: true,
            }),
        );
    });

    it("returns node as true if package devDependencies include @types/node", () => {
        // Arrange
        const packages = {
            dependencies: {},
            devDependencies: {
                "@types/node": "1.2.3",
            },
        };
        const typescript = undefined;

        // Act
        const env = createEnv({ packages, typescript });

        // Assert
        expect(env).toEqual(
            expect.objectContaining({
                node: true,
            }),
        );
    });
});
