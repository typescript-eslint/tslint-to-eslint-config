import { expect } from "@jest/globals";
import { Mock } from "jest-mock";
import { EOL } from "os";

import { fn } from "../fn.js";
import { stripAnsi } from "./stripAnsi.stubs.js";

const debugFileName = "stub-output.log";

const createStubWritableStream = () => ({
    writable: true,
    addListener: fn<NodeJS.WritableStream["addListener"]>(),
    emit: fn<NodeJS.WritableStream["emit"]>(),
    end: fn<NodeJS.WritableStream["end"]>(),
    eventNames: fn<NodeJS.WritableStream["eventNames"]>(),
    getMaxListeners: fn<NodeJS.WritableStream["getMaxListeners"]>(),
    listenerCount: fn<NodeJS.WritableStream["listenerCount"]>(),
    listeners: fn<NodeJS.WritableStream["listeners"]>(),
    off: fn<NodeJS.WritableStream["off"]>(),
    on: fn<NodeJS.WritableStream["on"]>(),
    once: fn<NodeJS.WritableStream["once"]>(),
    prependListener: fn<NodeJS.WritableStream["prependListener"]>(),
    prependOnceListener: fn<NodeJS.WritableStream["prependOnceListener"]>(),
    rawListeners: fn<NodeJS.WritableStream["rawListeners"]>(),
    removeAllListeners: fn<NodeJS.WritableStream["removeAllListeners"]>(),
    removeListener: fn<NodeJS.WritableStream["removeListener"]>(),
    setMaxListeners: fn<NodeJS.WritableStream["setMaxListeners"]>(),
    write: fn<NodeJS.WritableStream["write"]>(),
});

export const createStubLogger = () => ({
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

export const expectEqualWrites = (writer: Mock<any, any>, ...actual: string[]) => {
    const realCalls = removeOddCharactersAndTrim(
        writer.mock.calls.map((args) => args.join("")).join(""),
    );
    const actualCalls = removeOddCharactersAndTrim(actual.join(EOL) + EOL);

    expect(realCalls).toEqual(actualCalls);
};
