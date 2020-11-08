import { SansDependencies } from "../../binding";
import { AllOriginalConfigurations } from "../../input/findOriginalConfigurations";
import { convertRules } from "./rules/convertRules";
import { summarizePackageRules } from "./summarization/summarizePackageRules";

export type CreateESLintConfigurationDependencies = {
    convertRules: SansDependencies<typeof convertRules>;
    summarizePackageRules: SansDependencies<typeof summarizePackageRules>;
};

export const createESLintConfiguration = async (
    dependencies: CreateESLintConfigurationDependencies,
    originalConfigurations: AllOriginalConfigurations,
    prettier: boolean | undefined,
    ruleEquivalents: Map<string, string[]>,
) => {
    // 1a. Raw TSLint rules are mapped to their ESLint equivalents.
    const ruleConversionResults = dependencies.convertRules(
        originalConfigurations.tslint.full.rules,
        ruleEquivalents,
    );

    // 1b. Those ESLint equivalents are deduplicated and relevant preset(s) detected.
    return await dependencies.summarizePackageRules(
        originalConfigurations.eslint,
        originalConfigurations.tslint,
        ruleConversionResults,
        prettier,
    );
};
