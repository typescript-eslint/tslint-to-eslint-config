import { SansDependencies } from "../../binding";
import { RuleConversionResults } from "../../rules/convertRules";
import { removeExtendsDuplicatedRules } from "./removeExtendsDuplicatedRules";
import { retrieveExtendsValues } from "./retrieveExtendsValues";
import { ESLintConfiguration } from "../../input/findESLintConfiguration";

export type SimplifyPackageRulesDependencies = {
    removeExtendsDuplicatedRules: typeof removeExtendsDuplicatedRules;
    retrieveExtendsValues: SansDependencies<typeof retrieveExtendsValues>;
};

export type SimplifiedRuleConversionResults = Pick<RuleConversionResults, "converted" | "failed">;

export const simplifyPackageRules = async (
    dependencies: SimplifyPackageRulesDependencies,
    eslint: Partial<ESLintConfiguration> | undefined,
    ruleConversionResults: SimplifiedRuleConversionResults,
): Promise<SimplifiedRuleConversionResults> => {
    if (eslint === undefined || eslint.extends === undefined || eslint.extends.length === 0) {
        return ruleConversionResults;
    }

    const { configurationErrors, importedExtensions } = await dependencies.retrieveExtendsValues(
        eslint.extends,
    );

    const converted = dependencies.removeExtendsDuplicatedRules(
        ruleConversionResults.converted,
        importedExtensions,
    );

    return {
        converted,
        failed: [...ruleConversionResults.failed, ...configurationErrors],
    };
};
