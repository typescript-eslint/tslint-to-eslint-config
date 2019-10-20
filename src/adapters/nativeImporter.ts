export type NativeImporter = (moduleName: string) => unknown | Error;

export const nativeImporter = async (moduleName: string) => {
    try {
        return await import(moduleName);
    } catch (error) {
        return error;
    }
};
