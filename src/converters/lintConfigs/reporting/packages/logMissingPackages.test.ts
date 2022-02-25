import { describe, it } from "@jest/globals";

import { createStubLogger, expectEqualWrites } from "../../../../adapters/logger.stubs.js";
import { createEmptyConfigConversionResults } from "../../configConversionResults.stubs.js";
import { logMissingPackages } from "./logMissingPackages.js";
import { PackageManager } from "./packageManagers.js";

const createStubDependencies = (packageManager = PackageManager.npm) => ({
    choosePackageManager: async () => packageManager,
    logger: createStubLogger(),
});

describe("logMissingPackages", () => {
    it("does nothing when no package are missing", async () => {
        // Arrange
        const { choosePackageManager, logger } = createStubDependencies(PackageManager.npm);
        const ruleConversionResults = createEmptyConfigConversionResults();

        // Act
        await logMissingPackages({ choosePackageManager, logger }, ruleConversionResults, {
            dependencies: {
                "@typescript-eslint/eslint-plugin": "*",
                "@typescript-eslint/parser": "*",
                eslint: "*",
            },
            devDependencies: {},
        });

        // Assert
        expectEqualWrites(logger.stdout.write);
    });

    it("reports a singular message when one package is missing", async () => {
        // Arrange
        const { choosePackageManager, logger } = createStubDependencies(PackageManager.npm);
        const ruleConversionResults = createEmptyConfigConversionResults();

        // Act
        await logMissingPackages({ choosePackageManager, logger }, ruleConversionResults, {
            dependencies: {
                "@typescript-eslint/eslint-plugin": "*",
                "@typescript-eslint/parser": "*",
            },
            devDependencies: {},
        });

        // Assert
        expectEqualWrites(
            logger.stdout.write,
            `⚡ 1 new package is required for this ESLint configuration. ⚡`,
            `  npm install eslint --save-dev`,
        );
    });

    it("does not include eslint-config-prettier when extensions don't include eslint-config-prettier", async () => {
        // Arrange
        const { choosePackageManager, logger } = createStubDependencies();
        const ruleConversionResults = createEmptyConfigConversionResults({
            extends: [],
        });

        // Act
        await logMissingPackages({ choosePackageManager, logger }, ruleConversionResults);

        // Assert
        expectEqualWrites(
            logger.stdout.write,
            `⚡ 3 new packages are required for this ESLint configuration. ⚡`,
            `  npm install @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint --save-dev`,
        );
    });

    it("includes eslint-config-prettier when extensions include eslint-config-prettier", async () => {
        // Arrange
        const { choosePackageManager, logger } = createStubDependencies();
        const ruleConversionResults = createEmptyConfigConversionResults({
            extends: ["prettier"],
        });

        // Act
        await logMissingPackages({ choosePackageManager, logger }, ruleConversionResults);

        // Assert
        expectEqualWrites(
            logger.stdout.write,
            `⚡ 4 new packages are required for this ESLint configuration. ⚡`,
            `  npm install @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint eslint-config-prettier --save-dev`,
        );
    });

    it("includes @typescript-eslint/eslint-plugin-tslint when there are missing conversions", async () => {
        // Arrange
        const { choosePackageManager, logger } = createStubDependencies();
        const ruleConversionResults = createEmptyConfigConversionResults({
            missing: [
                {
                    ruleArguments: [],
                    ruleName: "missing-rule",
                    ruleSeverity: "error",
                },
            ],
        });

        // Act
        await logMissingPackages({ choosePackageManager, logger }, ruleConversionResults);

        // Assert
        expectEqualWrites(
            logger.stdout.write,
            `⚡ 4 new packages are required for this ESLint configuration. ⚡`,
            `  npm install @typescript-eslint/eslint-plugin @typescript-eslint/eslint-plugin-tslint @typescript-eslint/parser eslint --save-dev`,
        );
    });

    it("reports an npm command when the package manager is npm", async () => {
        // Arrange
        const { choosePackageManager, logger } = createStubDependencies(PackageManager.npm);
        const ruleConversionResults = createEmptyConfigConversionResults();

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
        const { choosePackageManager, logger } = createStubDependencies(PackageManager.pnpm);
        const ruleConversionResults = createEmptyConfigConversionResults();

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
        const { choosePackageManager, logger } = createStubDependencies(PackageManager.Yarn);
        const ruleConversionResults = createEmptyConfigConversionResults();

        // Act
        await logMissingPackages({ choosePackageManager, logger }, ruleConversionResults);

        // Assert
        expectEqualWrites(
            logger.stdout.write,
            `⚡ 3 new packages are required for this ESLint configuration. ⚡`,
            `  yarn add @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint --dev`,
        );
    });

    it("reports a Yarn command when the package manager is Yarn", async () => {
        // Arrange
        const { choosePackageManager, logger } = createStubDependencies(PackageManager.Yarn);
        const ruleConversionResults = createEmptyConfigConversionResults();

        // Act
        await logMissingPackages({ choosePackageManager, logger }, ruleConversionResults);

        // Assert
        expectEqualWrites(
            logger.stdout.write,
            `⚡ 3 new packages are required for this ESLint configuration. ⚡`,
            `  yarn add @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint --dev`,
        );
    });
});
