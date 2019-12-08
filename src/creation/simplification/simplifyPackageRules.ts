import { SansDependencies } from "../../binding";
import { ESLintConfiguration } from "../../input/findESLintConfiguration";
import { OriginalConfigurations } from "../../input/findOriginalConfigurations";
import { TSLintConfiguration } from "../../input/findTSLintConfiguration";
import { RuleConversionResults } from "../../rules/convertRules";
import { uniqueFromSources } from "../../utils";
import { collectTSLintRulesets } from "./collectTSLintRulesets";
import { removeExtendsDuplicatedRules } from "./removeExtendsDuplicatedRules";
import { retrieveExtendsValues } from "./retrieveExtendsValues";

export type SimplifyPackageRulesDependencies = {
    removeExtendsDuplicatedRules: typeof removeExtendsDuplicatedRules;
    retrieveExtendsValues: SansDependencies<typeof retrieveExtendsValues>;
};

export type SimplifiedRuleConversionResults = Pick<
    RuleConversionResults,
    "converted" | "failed"
> & {
    extends?: string[];
};

/**
 * Given an initial set of rule conversion results and original configurations,
 * determines which ESLint rulesets to extend from and removes redundant rule values.
 */
export const simplifyPackageRules = async (
    dependencies: SimplifyPackageRulesDependencies,
    eslint: Pick<OriginalConfigurations<ESLintConfiguration>, "full"> | undefined,
    tslint: OriginalConfigurations<TSLintConfiguration>,
    ruleConversionResults: SimplifiedRuleConversionResults,
): Promise<SimplifiedRuleConversionResults> => {
    const extendedRulesets = collectTSLintRulesets(tslint);

    const { configurationErrors, importedExtensions } = await dependencies.retrieveExtendsValues(
        uniqueFromSources(eslint?.full.extends ?? [], extendedRulesets),
    );

    const converted = dependencies.removeExtendsDuplicatedRules(
        ruleConversionResults.converted,
        importedExtensions,
    );

    return {
        converted,
        extends: extendedRulesets,
        failed: [...ruleConversionResults.failed, ...configurationErrors],
    };
};
