import { createTests } from "../../createTests";

createTests(__dirname, {
    extraArgs: ["--package", "my-package.json"],
});