import { convertObsoleteRule } from "../../obsoleteRule";
import { RuleConverter } from "../../ruleConverter";

export const convertPreferInlineDecorator: RuleConverter = () =>
    convertObsoleteRule("prefer-inline-decorator", "@angular-eslint/eslint-plugin");
