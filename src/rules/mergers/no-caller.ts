import { RuleMerger } from "../merger";

export const mergeNoCaller: RuleMerger = () => {
    // no-caller rule does not accept any options
    return [];
};
