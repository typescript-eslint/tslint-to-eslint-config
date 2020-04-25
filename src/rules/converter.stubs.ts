import { ConversionError } from "../errors/conversionError";

export const createStubConverter = (result: ConversionError | string[]) => {
    return () => {
        return result instanceof ConversionError
            ? result
            : {
                  rules: result.map((ruleName) => ({ ruleName })),
              };
    };
};
