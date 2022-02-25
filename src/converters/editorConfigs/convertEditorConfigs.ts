import { SansDependencies } from "../../binding.js";
import { ResultStatus, ResultWithStatus, TSLintToESLintSettings } from "../../types.js";
import { uniqueFromSources } from "../../utils.js";
import { convertEditorConfig } from "./convertEditorConfig.js";
import { reportEditorConfigConversionResults } from "./reporting/reportEditorConfigConversionResults.js";
import { EditorConfigDescriptor, EditorConfigsConversionResults } from "./types.js";

export type ConvertEditorConfigsDependencies = {
    convertEditorConfig: SansDependencies<typeof convertEditorConfig>;
    editorConfigDescriptors: readonly EditorConfigDescriptor[];
    reportEditorConfigConversionResults: SansDependencies<
        typeof reportEditorConfigConversionResults
    >;
};

/**
 * @see /docs/Editors.md for documentation.
 */
export const convertEditorConfigs = async (
    dependencies: ConvertEditorConfigsDependencies,
    settings: TSLintToESLintSettings,
): Promise<ResultWithStatus> => {
    const results: EditorConfigsConversionResults = {
        failed: new Map(),
        successes: new Map(),
    };

    // 1. Requested `--editor` paths are deduplicated into the list of file paths to convert.
    const requestedPaths = uniqueFromSources(settings.editor);

    await Promise.all(
        requestedPaths.map(async (requestedPath) => {
            // 2. Each path is mapped, if possible, to its editor's converter function.
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

            // 3. Results from calling `convertEditorConfig` on that file and configuration are stored.
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

    // 4. Results of converting are reported to the console and back to the calling code.
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

const defaultPathMatches = (defaultPath: string, requestedPath: string) =>
    requestedPath.replace(/\W+/g, "").endsWith(defaultPath.replace(/\W+/g, ""));
