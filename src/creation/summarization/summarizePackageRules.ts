import { SansDependencies } from "../../binding";
import { ESLintConfiguration } from "../../input/findESLintConfiguration";
import { OriginalConfigurations } from "../../input/findOriginalConfigurations";
import { TSLintConfiguration } from "../../input/findTSLintConfiguration";
import { RuleConversionResults } from "../../rules/convertRules";
import { uniqueFromSources } from "../../utils";
import { collectTSLintRulesets } from "./collectTSLintRulesets";
import { addPrettierExtensions } from "./prettier/addPrettierExtensions";
import { removeExtendsDuplicatedRules } from "./removeExtendsDuplicatedRules";
import { retrieveExtendsValues } from "./retrieveExtendsValues";
import { SummarizedResultsConfiguration } from "./types";

export type SummarizePackageRulesDependencies = {
    addPrettierExtensions: typeof addPrettierExtensions;
    removeExtendsDuplicatedRules: typeof removeExtendsDuplicatedRules;
    retrieveExtendsValues: SansDependencies<typeof retrieveExtendsValues>;
};

/**
 * Given an initial set of rule conversion results and original configurations,
 * determines which ESLint rulesets to extend from and removes redundant rule values.
 */
export const summarizePackageRules = async (
    dependencies: SummarizePackageRulesDependencies,
    eslint: Pick<OriginalConfigurations<ESLintConfiguration>, "full"> | undefined,
    tslint: OriginalConfigurations<Pick<TSLintConfiguration, "extends">>,
    ruleConversionResults: RuleConversionResults,
    prettierRequested?: boolean,
): Promise<SummarizedResultsConfiguration> => {
    const extendedESLintRulesets = eslint?.full.extends ?? [];
    const extendedTSLintRulesets = collectTSLintRulesets(tslint);
    const allExtensions = uniqueFromSources(extendedESLintRulesets, extendedTSLintRulesets);

    // 3a. If no output rules conflict with `eslint-config-prettier`, it's added in
    if (await dependencies.addPrettierExtensions(ruleConversionResults, prettierRequested)) {
        allExtensions.push("prettier", "prettier/@typescript-eslint");
    }

    if (allExtensions.length === 0) {
        return {
            ...ruleConversionResults,
            extends: [],
            extensionRules: new Map(),
        };
    }

    const { configurationErrors, importedExtensions } = await dependencies.retrieveExtendsValues(
        uniqueFromSources(extendedESLintRulesets, extendedTSLintRulesets),
    );

    const deduplication = dependencies.removeExtendsDuplicatedRules(
        ruleConversionResults.converted,
        importedExtensions,
    );

    return {
        ...ruleConversionResults,
        converted: deduplication.differentRules,
        extends: uniqueFromSources(allExtensions),
        extensionRules: deduplication.extensionRules,
        failed: [...ruleConversionResults.failed, ...configurationErrors],
    };
};
