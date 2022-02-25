import { ConversionError } from "../../../errors/conversionError.js";

export const createStubConverter = (result?: ConversionError | string[]) => {
    return () => {
        return result instanceof ConversionError
            ? result
            : {
                  rules: result?.map((ruleName) => ({ ruleName })),
              };
    };
};
