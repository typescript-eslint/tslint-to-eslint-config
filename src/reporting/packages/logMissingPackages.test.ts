// import { createStubLogger, expectEqualWrites } from "../adapters/logger.stubs";
// import { createEmptyConversionResults } from "../conversion/conversionResults.stubs";
// import { PackageManager } from "./packages/packageManagers";
// import { SimplifiedResultsConfiguration } from "../creation/simplification/simplifyPackageRules";

import { createStubLogger, expectEqualWrites } from "../../adapters/logger.stubs";
import { createEmptyConversionResults } from "../../conversion/conversionResults.stubs";
import { SimplifiedResultsConfiguration } from "../../creation/simplification/simplifyPackageRules";
import { logMissingPackages } from "./logMissingPackages";
import { PackageManager } from "./packageManagers";

const createStubDependencies = (
    packageManager: PackageManager,
    results?: Partial<SimplifiedResultsConfiguration>,
) => ({
    choosePackageManager: async () => packageManager,
    logger: createStubLogger(),
    ruleConversionResults: createEmptyConversionResults(results),
});

describe("logMissingPackages", () => {
    it("reports an npm command when the package manager is npm", async () => {
        // Arrange
        const { choosePackageManager, logger, ruleConversionResults } = createStubDependencies(
            PackageManager.npm,
        );

        // Act
        await logMissingPackages({ choosePackageManager, logger }, ruleConversionResults);

        // Assert
        expectEqualWrites(
            logger.stdout.write,
            `⚡ 3 new packages are required for this ESLint configuration. ⚡`,
            `  npm install @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint --save-dev`,
        );
    });

    it("reports a pnpm command when the package manager is pnpm", async () => {
        // Arrange
        const { choosePackageManager, logger, ruleConversionResults } = createStubDependencies(
            PackageManager.pnpm,
        );

        // Act
        await logMissingPackages({ choosePackageManager, logger }, ruleConversionResults);

        // Assert
        expectEqualWrites(
            logger.stdout.write,
            `⚡ 3 new packages are required for this ESLint configuration. ⚡`,
            `  pnpm add @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint --save-dev`,
        );
    });

    it("reports a Yarn command when the package manager is Yarn", async () => {
        // Arrange
        const { choosePackageManager, logger, ruleConversionResults } = createStubDependencies(
            PackageManager.Yarn,
        );

        // Act
        await logMissingPackages({ choosePackageManager, logger }, ruleConversionResults);

        // Assert
        expectEqualWrites(
            logger.stdout.write,
            `⚡ 3 new packages are required for this ESLint configuration. ⚡`,
            `  yarn add @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint --dev`,
        );
    });

    it("adds extensions to the missing packages list when they exist", async () => {
        // Arrange
        const { choosePackageManager, logger, ruleConversionResults } = createStubDependencies(
            PackageManager.Yarn,
            {
                extends: [
                    "plugin:eslint-config-prettier",
                    "plugin:eslint-config-prettier/@typescript-eslint",
                ],
            },
        );

        // Act
        await logMissingPackages({ choosePackageManager, logger }, ruleConversionResults);

        // Assert
        expectEqualWrites(
            logger.stdout.write,
            `⚡ 4 new packages are required for this ESLint configuration. ⚡`,
            `  yarn add @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint eslint-config-prettier --dev`,
        );
    });
});
