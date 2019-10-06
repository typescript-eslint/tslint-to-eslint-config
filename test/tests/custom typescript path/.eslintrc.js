module.exports = {
    "env": {
        "browser": true,
        "node": true
    },
    "extends": [],
    "rules": {
        "@typescript-eslint/array-type": "error",
        "@typescript-eslint/no-floating-promises": "error"
    },
    "globals": {},
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "project": "tsconfig.json",
        "sourceType": "module"
    },
    "plugins": [
        "@typescript-eslint"
    ],
};
