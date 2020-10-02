import { SansDependencies } from "../../binding";
import { TSLintToESLintSettings } from "../../types";
import { uniqueFromSources } from "../../utils";
import { convertEditorConfig } from "./convertEditorConfig";
import { reportEditorConfigConversionResults } from "./reporting/reportEditorConfigConversionResults";
import { EditorConfigDescriptor } from "./types";

export type ConvertEditorConfigsDependencies = {
    convertEditorConfig: SansDependencies<typeof convertEditorConfig>;
    editorConfigDescriptors: EditorConfigDescriptor[];
    reportEditorConfigConversionResults: SansDependencies<
        typeof reportEditorConfigConversionResults
    >;
};

export type EditorSettingConversionResults = {
    errors: string[];
    successes: string[];
};

export const convertEditorConfigs = async (
    dependencies: ConvertEditorConfigsDependencies,
    settings: TSLintToESLintSettings,
) => {
    const errors: Error[] = [];
    const successes: string[] = [];
    const requestedPaths = uniqueFromSources(settings.editor);

    await Promise.all(
        requestedPaths.map(async (requestedPath) => {
            const result = await dependencies.convertEditorConfig(requestedPath, settings);

            if (result) {
                errors.push(result);
            } else {
                successes.push(requestedPath);
            }
        }),
    );

    await Promise.all(
        dependencies.editorConfigDescriptors
            .filter(
                ([defaultPath]) =>
                    !successes.some((success) => defaultPathMatches(defaultPath, success)),
            )
            .map(
                async ([defaultPath, converter]) =>
                    await dependencies.convertEditorConfig(defaultPath, settings, converter),
            ),
    );

    return { errors, successes };
};

const defaultPathMatches = (defaultPath: string, otherPath: string) =>
    defaultPath.replace(/\W+/g, "") === otherPath.replace(/\W+/g, "");
