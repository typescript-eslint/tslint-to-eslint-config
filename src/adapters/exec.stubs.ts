import { fn } from "../fn";
import { Exec } from "./exec";

export type CreateStubExecSettings = {
    stderr: string;
    stdout: string;
};

export const createStubExec = ({ stderr = "", stdout = "" } = {}) =>
    fn<Exec>().mockResolvedValue({ stderr, stdout });

export const createStubThrowingExec =
    ({ stderr = "" } = {}) =>
    async () => {
        throw new Error(stderr);
    };
