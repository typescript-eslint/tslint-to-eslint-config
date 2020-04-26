import { createStubLogger, expectEqualWrites } from "../adapters/logger.stubs";
import { createEmptyConversionResults } from "../conversion/conversionResults.stubs";
import { PackageManager } from "./packages/packageManagers";
import { logMissingPackages } from "./reportOutputs";

const createStubDependencies = (packageManager: PackageManager) => ({
    logger: createStubLogger(),
    packageManager,
    ruleConversionResults: createEmptyConversionResults(),
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
            `⚡ 3 packages are required for running with ESLint. ⚡`,
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
            `⚡ 3 packages are required for running with ESLint. ⚡`,
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
            `⚡ 3 packages are required for running with ESLint. ⚡`,
            `  yarn add @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint --dev`,
        );
    });
});
