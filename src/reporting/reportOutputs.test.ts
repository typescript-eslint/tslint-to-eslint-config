import { createStubLogger, expectEqualWrites } from "../adapters/logger.stubs";
import { createEmptyConversionResults } from "../conversion/conversionResults.stubs";
import { PackageManager } from "./packages/packageManagers";
import { logMissingPackages } from "./reportOutputs";
import { SimplifiedResultsConfiguration } from "../creation/simplification/simplifyPackageRules";

const createStubDependencies = (
    packageManager: PackageManager,
    results?: Partial<SimplifiedResultsConfiguration>,
) => ({
    logger: createStubLogger(),
    packageManager,
    ruleConversionResults: createEmptyConversionResults(results),
});

describe("reportOutputs", () => {
    it("reports an npm command when the package manager is npm", () => {
        // Arrange
        createEmptyConversionResults();
        const { logger, packageManager, ruleConversionResults } = createStubDependencies(
            PackageManager.npm,
        );

        // Act
        logMissingPackages(ruleConversionResults, packageManager, logger);

        // Assert
        expectEqualWrites(
            logger.stdout.write,
            `⚡ 3 packages are required for this ESLint configuration. ⚡`,
            `  npm install @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint --save-dev`,
        );
    });

    it("reports a pnpm command when the package manager is pnpm", () => {
        // Arrange
        const { logger, packageManager, ruleConversionResults } = createStubDependencies(
            PackageManager.pnpm,
        );

        // Act
        logMissingPackages(ruleConversionResults, packageManager, logger);

        // Assert
        expectEqualWrites(
            logger.stdout.write,
            `⚡ 3 packages are required for this ESLint configuration. ⚡`,
            `  pnpm add @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint --save-dev`,
        );
    });

    it("reports a Yarn command when the package manager is Yarn", () => {
        // Arrange
        const { logger, packageManager, ruleConversionResults } = createStubDependencies(
            PackageManager.Yarn,
        );

        // Act
        logMissingPackages(ruleConversionResults, packageManager, logger);

        // Assert
        expectEqualWrites(
            logger.stdout.write,
            `⚡ 3 packages are required for this ESLint configuration. ⚡`,
            `  yarn add @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint --dev`,
        );
    });

    it("adds extensions to the missing packages list when they exist", () => {
        // Arrange
        const { logger, packageManager, ruleConversionResults } = createStubDependencies(
            PackageManager.Yarn,
            {
                extends: ["eslint-config-prettier", "eslint-config-prettier/@typescript-eslint"],
            },
        );

        // Act
        logMissingPackages(ruleConversionResults, packageManager, logger);

        // Assert
        expectEqualWrites(
            logger.stdout.write,
            `⚡ 4 packages are required for this ESLint configuration. ⚡`,
            `  yarn add @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint eslint-config-prettier --dev`,
        );
    });
});
