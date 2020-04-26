import { EOL } from "os";

import { createStubLogger, expectEqualWrites } from "../adapters/logger.stubs";
import { createEmptyConversionResults } from "../conversion/conversionResults.stubs";
import { ESLintRuleOptions } from "../rules/types";
import { PackageManager } from "./packages/packageManagers";
import { reportConversionResults } from "./reportConversionResults";

const createStubDependencies = (packageManager = PackageManager.Yarn) => {
    const choosePackageManager = jest.fn().mockResolvedValueOnce(packageManager);
    const logger = createStubLogger();

    return { choosePackageManager, logger };
};

const basicExtends = ["eslint-config-prettier", "eslint-config-prettier/@typescript-eslint"];

describe("reportConversionResults", () => {
    it("logs a successful conversion without notices when there is one converted rule without notices", async () => {
        // Arrange
        const conversionResults = createEmptyConversionResults({
            converted: new Map<string, ESLintRuleOptions>([
                [
                    `tslint-rule-one`,
                    {
                        ruleArguments: ["a", "b"],
                        ruleName: "tslint-rule-one",
                        ruleSeverity: "error",
                    },
                ],
            ]),
            extends: basicExtends,
        });

        const { choosePackageManager, logger } = createStubDependencies();

        // Act
        await reportConversionResults(
            { choosePackageManager, logger },
            ".eslintrc.js",
            conversionResults,
        );

        // Assert
        expectEqualWrites(
            logger.stdout.write,
            `✨ 1 rule replaced with its ESLint equivalent. ✨`,
            ``,
            `⚡ 4 packages are required for this ESLint configuration. ⚡`,
            `  yarn add @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint eslint-config-prettier --dev`,
        );
    });

    it("logs a successful conversion with notices when there is one converted rule with notices", async () => {
        // Arrange
        const conversionResults = createEmptyConversionResults({
            converted: new Map<string, ESLintRuleOptions>([
                [
                    `tslint-rule-one`,
                    {
                        notices: ["1", "2"],
                        ruleArguments: ["a", "b"],
                        ruleName: "tslint-rule-one",
                        ruleSeverity: "error",
                    },
                ],
            ]),
            extends: basicExtends,
        });

        const { choosePackageManager, logger } = createStubDependencies();

        // Act
        await reportConversionResults(
            { choosePackageManager, logger },
            ".eslintrc.js",
            conversionResults,
        );

        // Assert
        expectEqualWrites(
            logger.stdout.write,
            `✨ 1 rule replaced with its ESLint equivalent. ✨${EOL}`,
            `❗ 1 ESLint rule behaves differently from its TSLint counterpart ❗`,
            `  Check ${logger.debugFileName} for details.`,
            ``,
            `⚡ 4 packages are required for this ESLint configuration. ⚡`,
            `  yarn add @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint eslint-config-prettier --dev`,
        );
        expectEqualWrites(
            logger.info.write,
            `1 ESLint rule behaves differently from its TSLint counterpart:`,
            `  * tslint-rule-one:`,
            `    - 1`,
            `    - 2`,
        );
    });

    it("logs successful conversions when there are multiple converted rules", async () => {
        // Arrange
        const conversionResults = createEmptyConversionResults({
            converted: new Map<string, ESLintRuleOptions>([
                [
                    `tslint-rule-one`,
                    {
                        notices: ["1", "2"],
                        ruleArguments: ["a", "b"],
                        ruleName: "tslint-rule-one",
                        ruleSeverity: "error",
                    },
                ],
                [
                    `tslint-rule-two`,
                    {
                        notices: ["3", "4"],
                        ruleArguments: ["c", "d"],
                        ruleName: "tslint-rule-two",
                        ruleSeverity: "warn",
                    },
                ],
            ]),
            extends: basicExtends,
        });

        const { choosePackageManager, logger } = createStubDependencies();

        // Act
        await reportConversionResults(
            { choosePackageManager, logger },
            ".eslintrc.js",
            conversionResults,
        );

        // Assert
        expectEqualWrites(
            logger.stdout.write,
            `✨ 2 rules replaced with their ESLint equivalents. ✨`,
            ``,
            `❗ 2 ESLint rules behave differently from their TSLint counterparts ❗`,
            `  Check ${logger.debugFileName} for details.`,
            ``,
            `⚡ 4 packages are required for this ESLint configuration. ⚡`,
            `  yarn add @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint eslint-config-prettier --dev`,
        );
        expectEqualWrites(
            logger.info.write,
            `2 ESLint rules behave differently from their TSLint counterparts:`,
            `  * tslint-rule-one:`,
            `    - 1`,
            `    - 2`,
            `  * tslint-rule-two:`,
            `    - 3`,
            `    - 4`,
        );
    });

    it("logs a failed conversion when there is one failed conversion", async () => {
        // Arrange
        const conversionResults = createEmptyConversionResults({
            failed: [{ getSummary: () => "It broke." }],
            extends: basicExtends,
        });

        const { choosePackageManager, logger } = createStubDependencies();

        // Act
        await reportConversionResults(
            { choosePackageManager, logger },
            ".eslintrc.js",
            conversionResults,
        );

        // Assert
        expectEqualWrites(
            logger.stderr.write,
            `❌ 1 error thrown. ❌`,
            `  Check ${logger.debugFileName} for details.`,
        );
    });

    it("logs failed conversions when there are multiple failed conversions", async () => {
        // Arrange
        const conversionResults = createEmptyConversionResults({
            extends: basicExtends,
            failed: [{ getSummary: () => "It broke." }, { getSummary: () => "It really broke." }],
        });

        const { choosePackageManager, logger } = createStubDependencies();

        // Act
        await reportConversionResults(
            { choosePackageManager, logger },
            ".eslintrc.js",
            conversionResults,
        );

        // Assert
        expectEqualWrites(
            logger.stderr.write,
            `❌ 2 errors thrown. ❌`,
            `  Check ${logger.debugFileName} for details.`,
        );
    });

    it("logs a missing rule when there is a missing rule", async () => {
        // Arrange
        const conversionResults = createEmptyConversionResults({
            extends: basicExtends,
            missing: [
                {
                    ruleArguments: ["a", "b"],
                    ruleName: "tslint-rule-one",
                    ruleSeverity: "error",
                },
            ],
        });

        const { choosePackageManager, logger } = createStubDependencies();

        // Act
        await reportConversionResults(
            { choosePackageManager, logger },
            ".eslintrc.js",
            conversionResults,
        );

        // Assert
        expectEqualWrites(
            logger.stdout.write,
            `❓ 1 rule is not known by tslint-to-eslint-config to have an ESLint equivalent. ❓`,
            `  The "@typescript-eslint/tslint/config" section of .eslintrc.js configures eslint-plugin-tslint to run it in TSLint within ESLint.`,
            `  Check ${logger.debugFileName} for details.`,
            ``,
            `⚡ 5 packages are required for this ESLint configuration. ⚡`,
            `  yarn add @typescript-eslint/eslint-plugin @typescript-eslint/parser @typescript-eslint/tslint-eslint-plugin eslint eslint-config-prettier --dev`,
        );
        expectEqualWrites(
            logger.info.write,
            `1 rule is not known by tslint-to-eslint-config to have an ESLint equivalent:`,
            '  * tslint-to-eslint-config does not know the ESLint equivalent for TSLint\'s "tslint-rule-one".',
        );
    });

    it("logs missing rules when there are missing rules", async () => {
        // Arrange
        const conversionResults = createEmptyConversionResults({
            extends: basicExtends,
            missing: [
                {
                    ruleArguments: ["a", "b"],
                    ruleName: "tslint-rule-one",
                    ruleSeverity: "error",
                },
                {
                    ruleArguments: ["c", "d"],
                    ruleName: "tslint-rule-two",
                    ruleSeverity: "warning",
                },
            ],
        });

        const { choosePackageManager, logger } = createStubDependencies();

        // Act
        await reportConversionResults(
            { choosePackageManager, logger },
            ".eslintrc.js",
            conversionResults,
        );

        // Assert
        expectEqualWrites(
            logger.stdout.write,
            `❓ 2 rules are not known by tslint-to-eslint-config to have ESLint equivalents. ❓`,
            `  The "@typescript-eslint/tslint/config" section of .eslintrc.js configures eslint-plugin-tslint to run them in TSLint within ESLint.`,
            `  Check ${logger.debugFileName} for details.`,
            ``,
            `⚡ 5 packages are required for this ESLint configuration. ⚡`,
            `  yarn add @typescript-eslint/eslint-plugin @typescript-eslint/parser @typescript-eslint/tslint-eslint-plugin eslint eslint-config-prettier --dev`,
        );
        expectEqualWrites(
            logger.info.write,
            `2 rules are not known by tslint-to-eslint-config to have ESLint equivalents:`,
            '  * tslint-to-eslint-config does not know the ESLint equivalent for TSLint\'s "tslint-rule-one".',
            '  * tslint-to-eslint-config does not know the ESLint equivalent for TSLint\'s "tslint-rule-two".',
        );
    });

    it("logs missing plugins when there are missing plugins", async () => {
        // Arrange
        const conversionResults = createEmptyConversionResults({
            extends: basicExtends,
            plugins: new Set(["plugin-one", "plugin-two"]),
        });

        const { choosePackageManager, logger } = createStubDependencies();

        // Act
        await reportConversionResults(
            { choosePackageManager, logger },
            ".eslintrc.js",
            conversionResults,
        );

        // Assert
        expectEqualWrites(
            logger.stdout.write,
            `⚡ 6 packages are required for this ESLint configuration. ⚡`,
            `  yarn add @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint eslint-config-prettier plugin-one plugin-two --dev`,
        );
    });

    it("logs a Prettier recommendation when eslint-config-prettier isn't extended", async () => {
        // Arrange
        const conversionResults = createEmptyConversionResults({
            extends: [],
        });

        const { choosePackageManager, logger } = createStubDependencies();

        // Act
        await reportConversionResults(
            { choosePackageManager, logger },
            ".eslintrc.js",
            conversionResults,
        );

        // Assert
        expectEqualWrites(
            logger.stdout.write,
            `⚡ 3 packages are required for this ESLint configuration. ⚡`,
            `  yarn add @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint --dev`,
            ``,
            `☠ Prettier plugins are missing from your configuration. ☠`,
            `  We highly recommend running tslint-to-eslint-config --prettier to disable formatting ESLint rules.`,
            `  See https://github/typescript-eslint/tslint-to-eslint-config/docs/FAQs.md#should-i-use-prettier.`,
        );
    });
});
