import { PackageManager } from "./packages/packageManagers";
import { createStubLogger, expectEqualWrites } from "../adapters/logger.stubs";
import { logMissingPackages } from "./reportOutputs";

const createStubDependencies = (packageManager: PackageManager) => ({
    packageManager,
    plugins: new Set<string>(),
    logger: createStubLogger(),
});

describe("reportOutputs", () => {
    it("reports an npm command when the package manager is npm", () => {
        // Arrange
        const { logger, packageManager, plugins } = createStubDependencies(PackageManager.npm);

        // Act
        logMissingPackages(plugins, packageManager, logger);

        // Assert
        expectEqualWrites(
            logger.stdout.write,
            `⚡ 3 packages are required for running with ESLint. ⚡`,
            `  npm install @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint --save-dev`,
        );
    });

    it("reports a pnpm command when the package manager is pnpm", () => {
        // Arrange
        const { logger, packageManager, plugins } = createStubDependencies(PackageManager.pnpm);

        // Act
        logMissingPackages(plugins, packageManager, logger);

        // Assert
        expectEqualWrites(
            logger.stdout.write,
            `⚡ 3 packages are required for running with ESLint. ⚡`,
            `  pnpm add @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint --save-dev`,
        );
    });

    it("reports a Yarn command when the package manager is Yarn", () => {
        // Arrange
        const { logger, packageManager, plugins } = createStubDependencies(PackageManager.Yarn);

        // Act
        logMissingPackages(plugins, packageManager, logger);

        // Assert
        expectEqualWrites(
            logger.stdout.write,
            `⚡ 3 packages are required for running with ESLint. ⚡`,
            `  yarn add @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint --dev`,
        );
    });
});
