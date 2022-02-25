import { AllOriginalConfigurations } from "./input/findOriginalConfigurations.js";

export const createStubTSLintToESLintSettings = () => ({
    config: "./eslintrc.js",
});

export const createStubOriginalConfigurationsData = (
    overrides: Partial<AllOriginalConfigurations> = {},
): AllOriginalConfigurations => ({
    tslint: {
        full: {
            rules: {},
            rulesDirectory: [],
        },
        raw: {},
    },
    ...overrides,
});
