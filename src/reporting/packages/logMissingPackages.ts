import chalk from "chalk";
import { EOL } from "os";

import { Logger } from "../../adapters/logger";
import { SansDependencies } from "../../binding";
import { SimplifiedResultsConfiguration } from "../../creation/simplification/simplifyPackageRules";
import { PackagesConfiguration } from "../../input/findPackagesConfiguration";
import { isTruthy } from "../../utils";
import { installationMessages } from "../packages/packageManagers";
import { choosePackageManager } from "./choosePackageManager";
import { getPackageNameFromExtends } from "./getPackageNameFromExtends";

export type LogMissingPackagesDependencies = {
    choosePackageManager: SansDependencies<typeof choosePackageManager>;
    logger: Logger;
};

export const logMissingPackages = async (
    dependencies: LogMissingPackagesDependencies,
    ruleConversionResults: Pick<SimplifiedResultsConfiguration, "extends" | "missing" | "plugins">,
    packageConfiguration?: PackagesConfiguration,
) => {
    const packageManager = await dependencies.choosePackageManager();

    const existingPackageNames = new Set([
        ...Object.keys(packageConfiguration?.dependencies ?? {}),
        ...Object.keys(packageConfiguration?.devDependencies ?? {}),
    ]);

    const requiredPackageNames = [
        "@typescript-eslint/eslint-plugin",
        "@typescript-eslint/parser",
        ruleConversionResults.missing.length !== 0 && "@typescript-eslint/eslint-plugin-tslint",
        "eslint",
        ...Array.from(ruleConversionResults.extends?.map(getPackageNameFromExtends) ?? []),
        ...Array.from(ruleConversionResults.plugins),
    ].filter(isTruthy);

    const missingPackageNames = requiredPackageNames.filter(
        (packageName) => !existingPackageNames.has(packageName),
    );

    dependencies.logger.stdout.write(chalk.cyanBright(`${EOL}⚡ ${missingPackageNames.length}`));
    dependencies.logger.stdout.write(
        chalk.cyan(" new packages are required for this ESLint configuration."),
    );
    dependencies.logger.stdout.write(chalk.cyanBright(" ⚡"));
    dependencies.logger.stdout.write(`${EOL}  `);
    dependencies.logger.stdout.write(
        chalk.cyan(installationMessages[packageManager](missingPackageNames.join(" "))),
    );
    dependencies.logger.stdout.write(EOL);
};
