import { SansDependencies } from "../../../binding.js";
import { ESLintConfiguration } from "../../../input/findESLintConfiguration.js";
import { OriginalConfigurations } from "../../../input/findOriginalConfigurations.js";
import { TSLintConfiguration } from "../../../input/findTSLintConfiguration.js";
import { uniqueFromSources } from "../../../utils.js";
import { normalizeExtensions } from "../pruning/normalizeExtensions.js";
import { removeExtendsDuplicatedRules } from "../pruning/removeExtendsDuplicatedRules.js";
import { RuleConversionResults } from "../rules/convertRules.js";
import { collectTSLintRulesets } from "./collectTSLintRulesets.js";
import { normalizeESLintRules } from "./normalizeESLintRules.js";
import { checkPrettierExtension } from "./prettier/checkPrettierExtension.js";
import { retrieveExtendsValues } from "./retrieveExtendsValues.js";
import { SummarizedConfigResultsConfiguration } from "./types.js";

export type SummarizePackageRulesDependencies = {
    checkPrettierExtension: typeof checkPrettierExtension;
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
): Promise<SummarizedConfigResultsConfiguration> => {
    const extendedESLintRulesets = eslint?.full.extends ?? [];
    const extendedTSLintRulesets = collectTSLintRulesets(tslint);
    const allExtensions = uniqueFromSources(extendedESLintRulesets, extendedTSLintRulesets);

    // 3a. If no output rules conflict with `eslint-config-prettier`, it's added in
    if (dependencies.checkPrettierExtension(ruleConversionResults, prettierRequested)) {
        allExtensions.push("prettier", "prettier/@typescript-eslint");
    }

    if (allExtensions.length === 0) {
        return {
            ...ruleConversionResults,
            extends: [],
            extensionRules: new Map(),
        };
    }

    // 3b. Any ESLint rules that are configured the same as an extended preset are trimmed
    const { configurationErrors, importedExtensions } = await dependencies.retrieveExtendsValues(
        uniqueFromSources(extendedESLintRulesets, extendedTSLintRulesets),
    );
    const extensionRules = normalizeExtensions(importedExtensions);
    const deduplicated = dependencies.removeExtendsDuplicatedRules(
        new Map([
            ...Array.from(normalizeESLintRules(eslint?.full.rules)),
            ...Array.from(ruleConversionResults.converted),
        ]),
        extensionRules,
    );

    return {
        ...ruleConversionResults,
        converted: deduplicated.differentRules,
        extends: uniqueFromSources(allExtensions),
        extensionRules: deduplicated.extensionRules,
        failed: [...ruleConversionResults.failed, ...configurationErrors],
    };
};
