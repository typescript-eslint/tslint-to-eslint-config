import { jest } from "@jest/globals";

export const fn = <Reference extends (...args: any) => any>(reference?: Reference) =>
    jest.fn(reference);
