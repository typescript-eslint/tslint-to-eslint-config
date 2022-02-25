import { AllOriginalConfigurations } from "../input/findOriginalConfigurations.js";
import { ResultWithStatus, TSLintToESLintSettings } from "../types.js";

/**
 * Standalone (sans dependencies) type for a converter to run in the CLI.
 */
export type Converter = (
    settings: TSLintToESLintSettings,
    originalConfigurations: AllOriginalConfigurations,
    ruleEquivalents: Map<string, string[]>,
) => Promise<ResultWithStatus>;
