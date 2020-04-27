export const getPackageNameFromExtends = (name: string) => {
    if (name.startsWith("plugin:")) {
        name = name.slice("plugin:".length);
    }

    // This heuristic actually doesn't work :(
    return name
        .split("/")
        .slice(0, name.startsWith("@") ? 2 : 1)
        .join("/");
};
