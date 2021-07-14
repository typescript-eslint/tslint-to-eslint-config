import { uniqueFromSources } from "../../../../utils";
import { RuleMerger } from "../ruleMerger";

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
