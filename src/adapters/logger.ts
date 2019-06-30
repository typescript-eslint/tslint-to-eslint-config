/**
 * Wraps process outputs and a debug file.
 */
export type Logger = {
    readonly debugFileName: string;
    readonly info: NodeJS.WritableStream;
    readonly stderr: NodeJS.WritableStream;
    readonly stdout: NodeJS.WritableStream;
};
