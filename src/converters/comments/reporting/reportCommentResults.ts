import chalk from "chalk";
import { EOL } from "os";

import { Logger } from "../../../adapters/logger";
import { processLogger } from "../../../adapters/processLogger";

export type ReportCommentResultsDependencies = {
    logger: Logger;
};

export const reportCommentResultsDependencies: ReportCommentResultsDependencies = {
    logger: processLogger,
};

export const reportCommentResults = (
    dependencies: ReportCommentResultsDependencies,
    uniqueFilePathGlobs?: string[],
) => {
    if (uniqueFilePathGlobs === undefined) {
        dependencies.logger.stdout.write(
            chalk.magentaBright(
                `${EOL}♻ Consider using --comments to replace TSLint comment directives in your source files. ♻${EOL}`,
            ),
        );
        return;
    }

    dependencies.logger.stdout.write(chalk.magentaBright(`${EOL}♻ ${uniqueFilePathGlobs.length}`));
    dependencies.logger.stdout.write(
        chalk.magenta(` file${uniqueFilePathGlobs.length === 1 ? "" : "s"}`),
    );
    dependencies.logger.stdout.write(
        chalk.magenta(` of TSLint comment directives converted to ESLint.`),
    );
    dependencies.logger.stdout.write(chalk.magentaBright(` ♻${EOL}`));
};
