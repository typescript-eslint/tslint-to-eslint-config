import { createTests } from "../../createTests";

createTests(__dirname, {
    extraArgs: ["--typescript", "./tsconfig.custom.json"],
});