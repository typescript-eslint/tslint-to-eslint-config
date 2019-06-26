import { RuleMerger } from "../merger";

export const mergeBanTypes: RuleMerger = (existingOptions, newOptions) => {
    if (existingOptions === undefined && newOptions === undefined) {
        return [];
    }

    return [
        {
            types: {
                ...(existingOptions && existingOptions[0].types),
                ...(newOptions && newOptions[0].types),
            },
        },
    ];
};
