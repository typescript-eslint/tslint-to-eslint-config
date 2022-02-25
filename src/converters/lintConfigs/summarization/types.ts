import { RuleConversionResults } from "../rules/convertRules.js";
import { ESLintRuleOptions } from "../rules/types.js";

export type SummarizedConfigResultsConfiguration = RuleConversionResults & {
    extends: string[];
    extensionRules: Map<string, ESLintRuleOptions>;
};
