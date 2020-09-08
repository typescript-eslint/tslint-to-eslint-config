import { ResultWithStatus, TSLintToESLintSettings } from "../types";

/**
 * Standalone (sans dependencies) type for a converter to run in the CLI.
 */
export type ConfigConverter = (settings: TSLintToESLintSettings) => Promise<ResultWithStatus>;
