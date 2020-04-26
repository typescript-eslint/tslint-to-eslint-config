import chalk from "chalk";
import { EOL } from "os";

import { Logger } from "../adapters/logger";
import { ResultWithDataStatus, ResultStatus } from "../types";

export type ReportCommentResultsDependencies = {
    logger: Logger;
};

export const reportCommentResults = (
    dependencies: ReportCommentResultsDependencies,
    commentGlobs: string | string[] | undefined,
    commentsResult: ResultWithDataStatus<string[]>,
) => {
    if (commentGlobs === undefined) {
        dependencies.logger.stdout.write(
            chalk.magentaBright(
                `♻ Consider using --comment to replace TSLint comment directives in your source files. ♻${EOL}`,
            ),
        );
        return;
    }

    if (commentsResult.status === ResultStatus.Failed) {
        dependencies.logger.info.write(commentsResult.errors.join(EOL.repeat(2)) + EOL.repeat(2));
        dependencies.logger.stderr.write(
            chalk.magentaBright(
                `❌ Failed to fully replace TSLint comment directives in --comment files. ❌${EOL}`,
            ),
        );
        dependencies.logger.stderr.write(
            chalk.magenta(`  Check ${dependencies.logger.debugFileName} for details.${EOL}`),
        );
        return;
    }

    dependencies.logger.stdout.write(chalk.magentaBright(`♻ ${commentsResult.data.length}`));
    dependencies.logger.stdout.write(
        chalk.magenta(` file${commentsResult.data.length === 1 ? "" : "s"}`),
    );
    dependencies.logger.stdout.write(
        chalk.magenta(` of TSLint comment directives converted to ESLint.`),
    );
    dependencies.logger.stdout.write(chalk.magentaBright(` ♻${EOL}${EOL}`));
};
