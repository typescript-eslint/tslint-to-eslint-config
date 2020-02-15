export type NativeImporter = (moduleName: string) => unknown | Error;

export const nativeImporter = async (moduleName: string): Promise<unknown | Error> => {
    try {
        return await import(moduleName);
    } catch (error) {
        return error;
    }
};
