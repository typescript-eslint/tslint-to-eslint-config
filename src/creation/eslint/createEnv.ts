import { AllOriginalConfigurations } from "../../input/findOriginalConfigurations";

type EnvData = {
    browser: boolean;
    es6: boolean;
    node: boolean;
};

export const createEnv = ({
    packages,
    typescript,
}: Pick<AllOriginalConfigurations, "packages" | "typescript">): {} | Partial<EnvData> => {
    const browser =
        typescript === undefined ||
        typescript.compilerOptions.lib === undefined ||
        typescript.compilerOptions.lib.includes("dom");

    const es6 =
        typescript === undefined ||
        !["es3", "es5"].includes(typescript.compilerOptions.target.toLowerCase());

    const node =
        packages === undefined ||
        [...Object.keys(packages.dependencies), ...Object.keys(packages.devDependencies)].some(
            dependency => dependency.toLowerCase() === "@types/node",
        );

    return {
        ...(browser && { browser }),
        ...(es6 && { es6 }),
        ...(node && { node }),
    };
};
