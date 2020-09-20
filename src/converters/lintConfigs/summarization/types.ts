import { RuleConversionResults } from "../rules/convertRules";
import { ESLintRuleOptions } from "../rules/types";

export type SummarizedConfigResultsConfiguration = RuleConversionResults & {
    extends: string[];
    extensionRules: Map<string, ESLintRuleOptions>;
};
