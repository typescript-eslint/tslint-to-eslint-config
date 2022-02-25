import { childProcessExec } from "../adapters/childProcessExec.js";
import { findReportedConfiguration } from "../input/findReportedConfiguration.js";

/**
 * Runs a config print command and parses its output as JSON.
 *
 * @param command - Printer command to exec, such as "npx tslint --print-config".
 * @param config - Configuration file location to read from.
 */
export const findReportedConfigurationStandalone = async (command: string, config: string) => {
    return await findReportedConfiguration(childProcessExec, command, config);
};
