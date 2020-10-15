import { SansDependencies } from "../../binding";
import { ResultStatus, ResultWithStatus, TSLintToESLintSettings } from "../../types";
import { uniqueFromSources } from "../../utils";
import { convertEditorConfig } from "./convertEditorConfig";
import { reportEditorConfigConversionResults } from "./reporting/reportEditorConfigConversionResults";
import { EditorConfigDescriptor, EditorConfigsConversionResults } from "./types";

export type ConvertEditorConfigsDependencies = {
    convertEditorConfig: SansDependencies<typeof convertEditorConfig>;
    editorConfigDescriptors: readonly EditorConfigDescriptor[];
    reportEditorConfigConversionResults: SansDependencies<
        typeof reportEditorConfigConversionResults
    >;
};
export const convertEditorConfigs = async (
    dependencies: ConvertEditorConfigsDependencies,
    settings: TSLintToESLintSettings,
): Promise<ResultWithStatus> => {
    const results: EditorConfigsConversionResults = {
        failed: new Map(),
        successes: new Map(),
    };
    const requestedPaths = uniqueFromSources(settings.editor);

    await Promise.all(
        requestedPaths.map(async (requestedPath) => {
            const descriptor = dependencies.editorConfigDescriptors.find(([defaultPath]) =>
                defaultPathMatches(defaultPath, requestedPath),
            );
            if (!descriptor) {
                results.failed.set(
                    requestedPath,
                    new Error(`Unknown editor config path requested: '${requestedPath}'.`),
                );
                return;
            }

            const result = await dependencies.convertEditorConfig(
                descriptor[1],
                requestedPath,
                settings,
            );

            if (result instanceof Error) {
                results.failed.set(requestedPath, result);
            } else {
                results.successes.set(requestedPath, result);
            }
        }),
    );

    dependencies.reportEditorConfigConversionResults(results);

    return results.failed.size === 0
        ? {
              status: ResultStatus.Succeeded,
          }
        : {
              errors: Array.from(results.failed.values()),
              status: ResultStatus.Failed,
          };
};

const defaultPathMatches = (defaultPath: string, otherPath: string) =>
    defaultPath.replace(/\W+/g, "") === otherPath.replace(/\W+/g, "");
