import { obsoleteRuleTest } from "../../../obsoleteRule.stubs";
import { convertPreferInlineDecorator } from "../prefer-inline-decorator";

obsoleteRuleTest(
    convertPreferInlineDecorator,
    "prefer-inline-decorator",
    "@angular-eslint/eslint-plugin",
);
