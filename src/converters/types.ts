import { AllOriginalConfigurations } from "../input/findOriginalConfigurations";
import { ResultWithStatus, TSLintToESLintSettings } from "../types";

/**
 * Standalone (sans dependencies) type for a converter to run in the CLI.
 */
export type Converter = (
    settings: TSLintToESLintSettings,
    originalConfigurations: AllOriginalConfigurations,
) => Promise<ResultWithStatus>;
