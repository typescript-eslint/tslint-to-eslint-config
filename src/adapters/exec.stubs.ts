export type CreateStubExecSettings = {
    stderr: string;
    stdout: string;
};

export const createStubExec = ({ stderr = "", stdout = "" } = {}) =>
    jest.fn().mockReturnValue(Promise.resolve({ stderr, stdout }));

export const createStubThrowingExec = ({ stderr = "" } = {}) =>
    jest.fn().mockRejectedValue(new Error(stderr));
