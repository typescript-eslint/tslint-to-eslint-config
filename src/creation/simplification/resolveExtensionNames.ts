export const resolveExtensionNames = (rawExtensionNames: string | string[]) => {
    if (typeof rawExtensionNames === "string") {
        rawExtensionNames = [rawExtensionNames];
    }

    return rawExtensionNames.map(rawExtensionName =>
        rawExtensionName.startsWith(".") ||
        rawExtensionName.startsWith("eslint-plugin-") ||
        rawExtensionName.startsWith("eslint:")
            ? rawExtensionName
            : `eslint-plugin-${rawExtensionName}`,
    );
};
