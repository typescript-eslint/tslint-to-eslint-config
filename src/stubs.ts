import { EOL } from "os";
import stripAnsi from "strip-ansi";

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
    stripAnsi(text)
        .replace(
            new RegExp([String.fromCharCode(65039), String.fromCharCode(13)].join("|"), "g"),
            "",
        )
        .trim();

export const expectEqualWrites = (fn: jest.Mock, ...actual: string[]) => {
    const realCalls = removeOddCharactersAndTrim(fn.mock.calls.map(args => args.join("")).join(""));
    const actualCalls = removeOddCharactersAndTrim(actual.join(EOL) + EOL);

    for (let i = 0; i < realCalls.length; i += 1) {
        if (realCalls[i] !== actualCalls[i]) {
            console.log(
                i,
                "|" + realCalls[i] + "|",
                realCalls.charCodeAt(0),
                "vs",
                "|" + actualCalls[i] + "|",
                actualCalls.charCodeAt(0),
            );
            break;
        }
    }

    expect(realCalls).toEqual(actualCalls);
};
