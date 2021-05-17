import { convertObsoleteRule } from "../../obsoleteRule";
import { RuleConverter } from "../../ruleConverter";

export const convertImportDestructuringSpacing: RuleConverter = () =>
    convertObsoleteRule("import-destructuring-spacing", "@angular-eslint/eslint-plugin");
