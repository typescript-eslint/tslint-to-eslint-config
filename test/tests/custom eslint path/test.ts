import { createTests } from "../../createTests";

const eslint = "./.eslintrc.custom.js";

createTests(__dirname, {
    eslint,
    extraArgs: ["--eslint", eslint],
});