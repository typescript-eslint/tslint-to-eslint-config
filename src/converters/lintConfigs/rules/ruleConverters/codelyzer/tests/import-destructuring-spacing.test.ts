import { obsoleteRuleTest } from "../../../obsoleteRule.stubs";
import { convertImportDestructuringSpacing } from "../import-destructuring-spacing";

obsoleteRuleTest(
    convertImportDestructuringSpacing,
    "import-destructuring-spacing",
    "@angular-eslint/eslint-plugin",
);
