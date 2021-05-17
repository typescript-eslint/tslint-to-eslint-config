import { OBSOLETE_RULE_NOTICE } from "./obsoleteRule";
import { RuleConverter } from "./ruleConverter";

export const obsoleteRuleTest = (
    ruleTest: RuleConverter,
    tslintRuleName: string,
    pluginName: string,
) => {
    describe(ruleTest, () => {
        test("conversion without arguments", () => {
            const result = ruleTest({
                ruleArguments: [],
            });

            expect(result).toEqual({
                rules: [
                    {
                        ruleName: "",
                        notices: [OBSOLETE_RULE_NOTICE(tslintRuleName, pluginName)],
                    },
                ],
            });
        });
    });
};
