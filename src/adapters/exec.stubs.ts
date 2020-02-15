export type CreateStubExecSettings = {
    stderr: string;
    stdout: string;
};

export const createStubExec = ({ stderr = "", stdout = "" } = {}): jest.Mock =>
    jest.fn().mockReturnValue(Promise.resolve({ stderr, stdout }));

export const createStubThrowingExec = ({ stderr = "" } = {}): jest.Mock =>
    jest.fn().mockRejectedValue(Promise.resolve(new Error(stderr)));
