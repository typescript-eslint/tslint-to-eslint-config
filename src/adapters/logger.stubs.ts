import { EOL } from "os";
import stripAnsi from "strip-ansi";

const debugFileName = "stub-output.log";

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

type StubWritableStream = typeof createStubWritableStream;

export const createStubLogger = (): Partial<StubWritableStream> => ({
    debugFileName,
    info: createStubWritableStream(),
    stderr: createStubWritableStream(),
    stdout: createStubWritableStream(),
});

const removeOddCharactersAndTrim = (text: string) =>
    stripAnsi(text)
        .replace(
            new RegExp([String.fromCharCode(65039), String.fromCharCode(13)].join("|"), "g"),
            "",
        )
        .trim();

export const expectEqualWrites = (fn: jest.Mock, ...actual: string[]): void => {
    const realCalls = removeOddCharactersAndTrim(fn.mock.calls.map(args => args.join("")).join(""));
    const actualCalls = removeOddCharactersAndTrim(actual.join(EOL) + EOL);

    expect(realCalls).toEqual(actualCalls);
};
