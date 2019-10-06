import { createTests } from "../../createTests";

const eslint = "./eslintrc.js";

createTests(__dirname, {
    eslint,
    extraArgs: ["--eslint", eslint],
});