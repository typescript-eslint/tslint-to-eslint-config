import { findOriginalConfigurations } from "../input/findOriginalConfigurations";
import { ConfigurationLocations } from "../types";
import { findOriginalConfigurationsDependencies } from "./dependencies";

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
