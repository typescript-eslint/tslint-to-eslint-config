import { findOriginalConfigurations } from "../input/findOriginalConfigurations.js";
import { ConfigurationLocations } from "../types.js";
import { findOriginalConfigurationsDependencies } from "./dependencies.js";

/**
 * Retrieves the raw and computed contents of original configuration files.
 *
 * @param locations - Any overrides to file locations to read from.
 */
export const findOriginalConfigurationsStandalone = async (
    locations?: Partial<ConfigurationLocations>,
) => {
    return findOriginalConfigurations(findOriginalConfigurationsDependencies, {
        ...locations,
        config: locations?.config ?? ".eslintrc.js",
    });
};
