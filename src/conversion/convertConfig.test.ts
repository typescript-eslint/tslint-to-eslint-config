import { ResultStatus, FailedResult, SucceededDataResult } from "../types";
import { convertConfig, ConvertConfigDependencies } from "./convertConfig";
import { OriginalConfigurationsData } from "../input/findOriginalConfigurations";

const createStubDependencies = (
    overrides: Pick<ConvertConfigDependencies, "findOriginalConfigurations">,
) => ({
    convertRules: jest.fn(),
    reportConversionResults: jest.fn(),
    writeConversionResults: jest.fn().mockReturnValue(Promise.resolve()),
    ...overrides,
});

const createStubOriginalConfigurationsData = () => ({
    eslint: {},
    tslint: {
        rules: [],
        ruleDirectories: [],
    },
    typescript: {},
});

describe("convertConfig", () => {
    it("returns the failure result when finding the original configurations fails", async () => {
        // Arrange
        const findError: FailedResult = {
            errors: [],
            status: ResultStatus.Failed,
        };
        const dependencies = createStubDependencies({
            findOriginalConfigurations: async () => findError,
        });
        const settings = {};

        // Act
        const result = await convertConfig(dependencies, settings);

        // Assert
        expect(result).toEqual(findError);
    });

    it("returns a successful result when finding the original configurations succeeds", async () => {
        // Arrange
        const findSuccess: SucceededDataResult<OriginalConfigurationsData> = {
            data: createStubOriginalConfigurationsData(),
            status: ResultStatus.Succeeded,
        };
        const dependencies = createStubDependencies({
            findOriginalConfigurations: async () => findSuccess,
        });
        const settings = {};

        // Act
        const result = await convertConfig(dependencies, settings);

        // Assert
        expect(result).toEqual({
            status: ResultStatus.Succeeded,
        });
    });
});
