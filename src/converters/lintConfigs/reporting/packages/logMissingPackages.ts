import chalk from "chalk";
import { EOL } from "os";

import { Logger } from "../../../../adapters/logger";
import { SansDependencies } from "../../../../binding";
import { PackagesConfiguration } from "../../../../input/findPackagesConfiguration";
import { isTruthy } from "../../../../utils";
import { SummarizedConfigResultsConfiguration } from "../../summarization/types";
import { choosePackageManager } from "./choosePackageManager";
import { installationMessages } from "./packageManagers";

export type LogMissingPackagesDependencies = {
    choosePackageManager: SansDependencies<typeof choosePackageManager>;
    logger: Logger;
};

export const logMissingPackages = async (
    dependencies: LogMissingPackagesDependencies,
    ruleConversionResults: Pick<
        SummarizedConfigResultsConfiguration,
        "extends" | "missing" | "plugins"
    >,
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
        ruleConversionResults.extends.join("").includes("prettier") && "eslint-config-prettier",
        ruleConversionResults.missing.length !== 0 && "@typescript-eslint/eslint-plugin-tslint",
        "eslint",
        ...Array.from(ruleConversionResults.plugins),
    ].filter(isTruthy);

    const missingPackageNames = requiredPackageNames
        .filter((packageName) => !existingPackageNames.has(packageName))
        .sort();

    if (missingPackageNames.length === 0) {
        return;
    }

    dependencies.logger.stdout.write(chalk.cyanBright(`${EOL}⚡ ${missingPackageNames.length}`));
    dependencies.logger.stdout.write(
        chalk.cyan(
            ` new package${
                missingPackageNames.length === 1 ? " is" : "s are"
            } required for this ESLint configuration.`,
        ),
    );
    dependencies.logger.stdout.write(chalk.cyanBright(" ⚡"));
    dependencies.logger.stdout.write(`${EOL}  `);
    dependencies.logger.stdout.write(
        chalk.cyan(installationMessages[packageManager](missingPackageNames.join(" "))),
    );
    dependencies.logger.stdout.write(EOL);
};
