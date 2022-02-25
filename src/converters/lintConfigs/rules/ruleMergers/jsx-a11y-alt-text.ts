import { uniqueFromSources } from "../../../../utils.js";
import { RuleMerger } from "../ruleMerger.js";

export const mergeJsxA11yAltText: RuleMerger = (existingOptions, newOptions) => {
    const existingElements = existingOptions?.[0]?.elements;
    const newElements = newOptions?.[0]?.elements;

    return existingElements || newElements
        ? [
              {
                  elements: uniqueFromSources(existingElements ?? [], newElements ?? []),
              },
          ]
        : [];
};
