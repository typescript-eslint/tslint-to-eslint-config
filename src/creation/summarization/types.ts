import { RuleConversionResults } from "../../rules/convertRules";
import { ESLintRuleOptions } from "../../rules/types";

export type SummarizedResultsConfiguration = RuleConversionResults & {
    extends: string[];
    extensionRules: Map<string, ESLintRuleOptions>;
};
