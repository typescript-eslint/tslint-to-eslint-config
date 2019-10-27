import { FileSystem } from "../adapters/fileSystem";
import { SettingConversionResults } from "../settings/convertSettings";
import { formatOutput } from "./formatting/formatOutput";
import { DeepPartial } from "../input/findConfiguration";
import { EditorConfiguration } from "../input/findEditorConfiguration";

export type WriteConversionResultsDependencies = {
    fileSystem: Pick<FileSystem, "writeFile">;
};

export const writeConversionResults = async (
    dependencies: WriteConversionResultsDependencies,
    outputPath: string,
    conversionResults: SettingConversionResults,
    originalConfiguration: DeepPartial<EditorConfiguration>,
) => {
    const output = {
        ...originalConfiguration,
        ...formatConvertedSettings(conversionResults),
    };

    return await dependencies.fileSystem.writeFile(outputPath, formatOutput(outputPath, output));
};

export const formatConvertedSettings = (conversionResults: SettingConversionResults) => {
    const output: { [i: string]: string | any[] } = {};
    const sortedEntries = Array.from(conversionResults.converted).sort(([nameA], [nameB]) =>
        nameA.localeCompare(nameB),
    );

    for (const [name, setting] of sortedEntries) {
        output[name] = setting.value;
    }

    return output;
};
