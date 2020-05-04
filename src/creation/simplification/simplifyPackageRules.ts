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

export type SimplifyPackageRulesDependencies = {
    addPrettierExtensions: typeof addPrettierExtensions;
    removeExtendsDuplicatedRules: typeof removeExtendsDuplicatedRules;
    retrieveExtendsValues: SansDependencies<typeof retrieveExtendsValues>;
};

export type SimplifiedResultsConfiguration = RuleConversionResults & {
    extends?: string[];
};

/**
 * Given an initial set of rule conversion results and original configurations,
 * determines which ESLint rulesets to extend from and removes redundant rule values.
 */
export const simplifyPackageRules = async (
    dependencies: SimplifyPackageRulesDependencies,
    eslint: Pick<OriginalConfigurations<ESLintConfiguration>, "full"> | undefined,
    tslint: OriginalConfigurations<Pick<TSLintConfiguration, "extends">>,
    ruleConversionResults: RuleConversionResults,
    prettierRequested?: boolean,
): Promise<SimplifiedResultsConfiguration> => {
    const extendedESLintRulesets = eslint?.full.extends ?? [];
    const extendedTSLintRulesets = collectTSLintRulesets(tslint);
    const allExtensions = uniqueFromSources(extendedESLintRulesets, extendedTSLintRulesets);

    // 3a. If no output rules conflict with `eslint-config-prettier`, it's added in
    if (await dependencies.addPrettierExtensions(ruleConversionResults, prettierRequested)) {
        allExtensions.push("prettier", "prettier/@typescript-eslint");
    }

    if (allExtensions.length === 0) {
        return ruleConversionResults;
    }

    const { configurationErrors, importedExtensions } = await dependencies.retrieveExtendsValues(
        uniqueFromSources(extendedESLintRulesets, extendedTSLintRulesets),
    );

    const converted = dependencies.removeExtendsDuplicatedRules(
        ruleConversionResults.converted,
        importedExtensions,
    );

    return {
        ...ruleConversionResults,
        converted,
        extends: uniqueFromSources(allExtensions),
        failed: [...ruleConversionResults.failed, ...configurationErrors],
    };
};
