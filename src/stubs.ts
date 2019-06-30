import { EOL } from "os";

import { ConfigConversionResults } from "./rules/convertRules";

export const emptyConversionResults: ConfigConversionResults = {
    converted: new Map(),
    failed: [],
    missing: [],
    packages: new Set(),
};

const debugFileName = "stub-output.log";

export const createStubLogger = () => ({
    debugFileName,
    info: createStubWritableStream(),
    stderr: createStubWritableStream(),
    stdout: createStubWritableStream(),
});

const createStubWritableStream = () => ({
    writable: true,
    addListener: jest.fn(),
    emit: jest.fn(),
    end: jest.fn(),
    eventNames: jest.fn(),
    getMaxListeners: jest.fn(),
    listenerCount: jest.fn(),
    listeners: jest.fn(),
    off: jest.fn(),
    on: jest.fn(),
    once: jest.fn(),
    prependListener: jest.fn(),
    prependOnceListener: jest.fn(),
    rawListeners: jest.fn(),
    removeAllListeners: jest.fn(),
    removeListener: jest.fn(),
    setMaxListeners: jest.fn(),
    write: jest.fn(),
});

const removeOddCharactersAndTrim = (text: string) =>
    text
        .replace(
            new RegExp([String.fromCharCode(65039), String.fromCharCode(13)].join("|"), "g"),
            "",
        )
        .trim();

export const expectEqualWrites = (fn: jest.Mock, ...actual: string[]) => {
    const realCalls = removeOddCharactersAndTrim(fn.mock.calls.map(args => args.join("")).join(""));
    const actualCalls = removeOddCharactersAndTrim(actual.join(EOL) + EOL);

    expect(realCalls).toEqual(actualCalls);
};

// Differences in Chalk outputs are not well formatted by Jest string diff outputs
// They seem to always fail unit tests (and are pretty coincidental to testing behavior)
export const stubOutChalk = () =>
    jest.mock("chalk", () => ({
        default: {
            cyan: (text: string) => text,
            cyanBright: (text: string) => text,
            gray: (text: string) => text,
            green: (text: string) => text,
            greenBright: (text: string) => text,
            red: (text: string) => text,
            redBright: (text: string) => text,
            yellow: (text: string) => text,
            yellowBright: (text: string) => text,
        },
    }));
