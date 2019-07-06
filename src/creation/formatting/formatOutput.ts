import { formatJsonOutput } from "./formatters/formatJsonOutput";
import { formatJsOutput } from "./formatters/formatJsOutput";

const formatters = new Map([["js", formatJsOutput]]);

export const formatOutput = (outputPath: string, configuration: unknown): string => {
    const customFormatter = formatters.get(getExtension(outputPath));
    const formatter = customFormatter === undefined ? formatJsonOutput : formatJsOutput;

    return formatter(configuration);
};

const getExtension = (outputPath: string) => {
    const periodIndex = outputPath.lastIndexOf(".");

    return periodIndex === -1 ? outputPath : outputPath.slice(periodIndex + 1);
};
