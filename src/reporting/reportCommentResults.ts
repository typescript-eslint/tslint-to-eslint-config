import chalk from "chalk";
import { EOL } from "os";

import { Logger } from "../adapters/logger";
import { ResultWithDataStatus, ResultStatus } from "../types";

export type ReportCommentResultsDependencies = {
    logger: Logger;
};

export const reportCommentResults = (
    dependencies: ReportCommentResultsDependencies,
    commentsResult: ResultWithDataStatus<string[] | undefined>,
) => {
    if (commentsResult.status === ResultStatus.Failed) {
        const headline = `${commentsResult.errors.length} error${
            commentsResult.errors.length === 1 ? "" : "s"
        } converting TSLint comment directives in --comment files`;

        dependencies.logger.stderr.write(chalk.magentaBright(`${EOL}❌ ${headline}. ❌${EOL}`));
        dependencies.logger.stderr.write(
            chalk.magenta(`  Check ${dependencies.logger.debugFileName} for details.${EOL}`),
        );

        dependencies.logger.info.write(`${headline}:${EOL}`);
        dependencies.logger.info.write(
            commentsResult.errors.map((error) => `  * ${error.message}${EOL}`).join(""),
        );
        dependencies.logger.info.write(EOL);
        return;
    }

    if (commentsResult.data === undefined) {
        dependencies.logger.stdout.write(
            chalk.magentaBright(
                `${EOL}♻ Consider using --comment to replace TSLint comment directives in your source files. ♻${EOL}`,
            ),
        );
        return;
    }

    dependencies.logger.stdout.write(chalk.magentaBright(`${EOL}♻ ${commentsResult.data.length}`));
    dependencies.logger.stdout.write(
        chalk.magenta(` file${commentsResult.data.length === 1 ? "" : "s"}`),
    );
    dependencies.logger.stdout.write(
        chalk.magenta(` of TSLint comment directives converted to ESLint.`),
    );
    dependencies.logger.stdout.write(chalk.magentaBright(` ♻${EOL}`));
};
