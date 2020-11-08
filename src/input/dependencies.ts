import { childProcessExec } from "../adapters/childProcessExec";
import { bind } from "../binding";
import { importer, importerDependencies } from "./importer";

export const findConfigurationDependencies = {
    exec: childProcessExec,
    importer: bind(importer, importerDependencies),
};
