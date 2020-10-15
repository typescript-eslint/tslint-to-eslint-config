import { SansDependencies } from "../../../binding";
import { ESLintConfiguration } from "../../../input/findESLintConfiguration";
import { OriginalConfigurations } from "../../../input/findOriginalConfigurations";
import { TSLintConfiguration } from "../../../input/findTSLintConfiguration";
import { uniqueFromSources } from "../../../utils";
import { removeExtendsDuplicatedRules } from "../pruning/removeExtendsDuplicatedRules";
import { normalizeExtensions } from "../pruning/normalizeExtensions";
import { RuleConversionResults } from "../rules/convertRules";
import { collectTSLintRulesets } from "./collectTSLintRulesets";
import { normalizeESLintRules } from "./normalizeESLintRules";
import { checkPrettierExtension } from "./prettier/checkPrettierExtension";
import { retrieveExtendsValues } from "./retrieveExtendsValues";
import { SummarizedConfigResultsConfiguration } from "./types";

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
