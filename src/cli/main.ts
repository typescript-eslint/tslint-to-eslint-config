import { EOL } from "os";

import { processLogger } from "../adapters/processLogger";
import { runCli, runCliDependencies } from "../cli/runCli";

export const main = async (argv: string[]) => {
    try {
        const resultStatus = await runCli(runCliDependencies, argv);
        processLogger.info.close();

        if (resultStatus !== 0) {
            process.exitCode = 1;
        }
    } catch (error) {
        processLogger.info.close();
        processLogger.stdout.write(`Error in tslint-to-eslint-config: ${error.stack}${EOL}`);
        process.exitCode = 1;
    }
};
