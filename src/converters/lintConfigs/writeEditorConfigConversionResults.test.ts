import { createStubFileSystem } from "../../adapters/fileSystem.stub";
import { EditorConfiguration } from "../../input/editorConfiguration";
import { DeepPartial } from "../../input/findReportedConfiguration";
import { EditorSettingConversionResults } from "../editorConfigs/convertEditorSettings";
import { createEmptyEditorSettingConversionResults } from "../editorConfigs/editorConversionResults.stubs";
import { EditorSetting } from "../editorConfigs/types";
import { formatJsonOutput } from "./formatting/formatters/formatJsonOutput";
import {
    writeEditorConfigConversionResults,
    WriteConversionResultsDependencies,
} from "./writeEditorConfigConversionResults";

const createStubDependencies = (overrides: Partial<WriteConversionResultsDependencies> = {}) => ({
    fileSystem: createStubFileSystem(),
    ...overrides,
});

describe("writeConversionResults", () => {
    it("writes to correct output path with file system", async () => {
        // Arrange
        const dependencies = createStubDependencies();
        const outputPath = "/temp";
        const { originalConfig, conversionResults } = setupConversionEnvironment();

        // Act
        await writeEditorConfigConversionResults(
            dependencies,
            outputPath,
            conversionResults,
            originalConfig,
        );

        // Assert
        expect(dependencies.fileSystem.writeFile).toHaveBeenCalledWith(
            outputPath,
            expect.anything(),
        );
    });

    it("writes formatted output with sorted keys to file system", async () => {
        // Arrange
        const dependencies = createStubDependencies();
        const outputPath = "/temp";

        const { originalConfig, conversionResults } = setupConversionEnvironment({
            originalConfig: {
                "property.a": "someValue",
                "property.c": 123,
                "property.b": {
                    "unsorted.sub.property.b": false,
                    "unsorted.sub.property.a": false,
                },
            },
            conversionResults: createEmptyEditorSettingConversionResults({
                converted: new Map<string, EditorSetting>([
                    [
                        "eslint-setting-b",
                        {
                            editorSettingName: "eslint-setting-b",
                            value: 42,
                        },
                    ],
                    [
                        "eslint-setting-a",
                        {
                            editorSettingName: "eslint-setting-a",
                            value: 4711,
                        },
                    ],
                ]),
            }),
        });

        const expectedSortedOutput = formatJsonOutput({
            "eslint-setting-a": 4711,
            "eslint-setting-b": 42,
            "property.a": "someValue",
            "property.b": {
                "unsorted.sub.property.b": false,
                "unsorted.sub.property.a": false,
            },
            "property.c": 123,
        });

        // Act
        await writeEditorConfigConversionResults(
            dependencies,
            outputPath,
            conversionResults,
            originalConfig,
        );

        // Assert
        expect(dependencies.fileSystem.writeFile).toHaveBeenCalledWith(
            expect.anything(),
            expectedSortedOutput,
        );
    });
});

function setupConversionEnvironment(
    overrides: {
        conversionResults?: EditorSettingConversionResults;
        originalConfig?: DeepPartial<EditorConfiguration>;
    } = {},
) {
    return {
        originalConfig: {
            "typescript.tsdk": "node_modules/typescript/lib",
            "editor.tabSize": 4,
            "editor.codeActionsOnSave": {
                "source.organizeImports": false,
            },
        },
        conversionResults: createEmptyEditorSettingConversionResults({
            converted: new Map<string, EditorSetting>([
                [
                    "tslint-editor-setting-one",
                    {
                        editorSettingName: "tslint-editor-setting-one",
                        value: 42,
                    },
                ],
            ]),
        }),
        ...overrides,
    };
}
