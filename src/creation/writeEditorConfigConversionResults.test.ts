import { createStubFileSystem } from "../adapters/fileSystem.stub";
import { createEmptySettingConversionResults } from "../conversion/conversionResults.stubs";
import { EditorSetting } from "../settings/types";
import {
    writeConversionResults,
    WriteConversionResultsDependencies,
} from "./writeEditorConfigConversionResults";

const createStubDependencies = (overrides: Partial<WriteConversionResultsDependencies> = {}) => ({
    fileSystem: createStubFileSystem(),
    ...overrides,
});

describe("writeConversionResults", () => {
    it("write with file system to correct output path", async () => {
        // Arrange
        const originalConfig = {
            "typescript.tsdk": "node_modules/typescript/lib",
            "editor.tabSize": 4,
            "editor.codeActionsOnSave": {
                "source.organizeImports": false,
            },
        };
        const outputPath = "/temp";
        const dependencies = createStubDependencies();
        const conversionResults = createEmptySettingConversionResults({
            converted: new Map<string, EditorSetting>([
                [
                    "tslint-setting-one",
                    {
                        settingName: "tslint-setting-one",
                        value: 42,
                    },
                ],
            ]),
        });

        // Act
        await writeConversionResults(dependencies, outputPath, conversionResults, originalConfig);

        // Assert
        expect(dependencies.fileSystem.writeFile).toHaveBeenCalledWith(
            outputPath,
            expect.anything(),
        );
    });
});
