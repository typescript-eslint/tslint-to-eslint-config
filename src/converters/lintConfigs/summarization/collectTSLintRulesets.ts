import { OriginalConfigurations } from "../../../input/findOriginalConfigurations";
import { TSLintConfiguration } from "../../../input/findTSLintConfiguration";
import { uniqueFromSources } from "../../../utils";

const nativeExtensions = new Map([
    ["tslint:all", ["plugin:@typescript-eslint/all"]],
    [
        "tslint:recommended",
        [
            "plugin:@typescript-eslint/recommended",
            "plugin:@typescript-eslint/recommended-requiring-type-checking",
        ],
    ],
    ["tslint-react", ["plugin:react/recommended"]],
]);

export const collectTSLintRulesets = (
    tslint: OriginalConfigurations<Pick<TSLintConfiguration, "extends">>,
) => {
    const allExtensions = uniqueFromSources(tslint.full.extends, tslint.raw.extends);

    const extensions = new Set<string>();

    for (const extension of allExtensions) {
        const mappedExtensions = nativeExtensions.get(extension);

        if (mappedExtensions !== undefined) {
            for (const mappedExtension of mappedExtensions) {
                extensions.add(mappedExtension);
            }
        }
    }

    return Array.from(extensions);
};
