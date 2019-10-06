module.exports = {
    "env": {
        "browser": true,
        "es6": true,
        "node": true
    },
    "extends": [],
    "rules": {
        "@typescript-eslint/tslint/config": [
            "error",
            {
                "rules": {
                    "this-definitely-does-not-exist": true
                }
            }
        ]
    },
    "globals": {},
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "project": "tsconfig.json",
        "sourceType": "module"
    },
    "plugins": [
        "@typescript-eslint",
        "@typescript-eslint/tslint"
    ],
    "settings": {
        "import/resolver": {
            "node": {
                "extensions": [
                    ".mjs",
                    ".js",
                    ".json"
                ]
            }
        },
        "import/extensions": [
            ".js",
            ".mjs",
            ".jsx"
        ],
        "import/core-modules": [],
        "import/ignore": [
            "node_modules",
            "\\.(coffee|scss|css|less|hbs|svg|json)$"
        ]
    }
};
