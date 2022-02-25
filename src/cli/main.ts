import { EOL } from "os";

import { processLogger } from "../adapters/processLogger.js";
import { runCliDependencies } from "../api/dependencies.js";
import { runCli } from "../cli/runCli.js";
import { asError } from "../utils.js";

export const main = async (argv: string[]) => {
    try {
        const resultStatus = await runCli(runCliDependencies, argv);
        processLogger.info.close();

        if (resultStatus !== 0) {
            process.exitCode = 1;
        }
    } catch (error) {
        processLogger.info.close();
        processLogger.stdout.write(
            `Error in tslint-to-eslint-config: ${asError(error).stack}${EOL}`,
        );
        process.exitCode = 1;
    }
};
