import { FileSystem } from "../adapters/fileSystem";
import { EditorSettingConversionResults } from "../editorSettings/convertEditorSettings";
import { EditorConfiguration } from "../input/editorConfiguration";
import { DeepPartial } from "../input/findReportedConfiguration";
import { formatOutput } from "./formatting/formatOutput";

export type WriteConversionResultsDependencies = {
    fileSystem: Pick<FileSystem, "writeFile">;
};

export const writeConversionResults = async (
    dependencies: WriteConversionResultsDependencies,
    outputPath: string,
    conversionResults: EditorSettingConversionResults,
    originalConfiguration: DeepPartial<EditorConfiguration>,
): Promise<undefined | Error> => {
    const output = {
        ...originalConfiguration,
        ...formatConvertedSettings(conversionResults),
    };

    return await dependencies.fileSystem.writeFile(outputPath, formatOutput(outputPath, output));
};

export const formatConvertedSettings = (
    conversionResults: EditorSettingConversionResults,
): {
    [i: string]: string | any[];
} => {
    const output: { [i: string]: string | any[] } = {};
    const sortedEntries = Array.from(conversionResults.converted).sort(([nameA], [nameB]) =>
        nameA.localeCompare(nameB),
    );

    for (const [name, setting] of sortedEntries) {
        output[name] = setting.value;
    }

    return output;
};
