import { SansDependencies } from "../../binding";
import { ResultStatus, ResultWithStatus, TSLintToESLintSettings } from "../../types";
import { uniqueFromSources } from "../../utils";
import { convertEditorConfig } from "./convertEditorConfig";
import { reportEditorConfigConversionResults } from "./reporting/reportEditorConfigConversionResults";
import { EditorConfigDescriptor } from "./types";

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
    const failed: Error[] = [];
    const successes: string[] = [];
    const requestedPaths = uniqueFromSources(settings.editor);

    // 1. Requested paths ??? with error reporting ???
    await Promise.all(
        requestedPaths.map(async (requestedPath) => {
            const descriptor = dependencies.editorConfigDescriptors.find(([defaultPath]) =>
                defaultPathMatches(defaultPath, requestedPath),
            );
            if (!descriptor) {
                failed.push(new Error(`Unknown editor config path requested: '${requestedPath}'.`));
                return;
            }

            const error = await dependencies.convertEditorConfig(
                descriptor[1],
                requestedPath,
                settings,
            );

            if (error) {
                failed.push(error);
            } else {
                successes.push(requestedPath);
            }
        }),
    );

    // 2. Default paths ??? without error reporting ???
    // (yes, this works, .convertEditorConfig has the readFile attempt)
    // (todo, change to only if requested paths is true bool?)
    await Promise.all(
        dependencies.editorConfigDescriptors
            .filter(
                ([defaultPath]) =>
                    !requestedPaths.some((success) => defaultPathMatches(defaultPath, success)),
            )
            .map(async ([defaultPath, converter]) => {
                const error = await dependencies.convertEditorConfig(
                    converter,
                    defaultPath,
                    settings,
                );

                if (!error) {
                    successes.push(defaultPath);
                }
            }),
    );

    dependencies.reportEditorConfigConversionResults({ failed, successes });

    return failed.length === 0
        ? {
              status: ResultStatus.Succeeded,
          }
        : {
              errors: failed,
              status: ResultStatus.Failed,
          };
};

const defaultPathMatches = (defaultPath: string, otherPath: string) =>
    defaultPath.replace(/\W+/g, "") === otherPath.replace(/\W+/g, "");
