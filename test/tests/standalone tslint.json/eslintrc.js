module.exports = {
    "env": {
        "browser": true,
        "es6": true,
        "node": true
    },
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "project": "tsconfig.json",
        "sourceType": "module"
    },
    "plugins": [
        "@typescript-eslint",
        "@typescript-eslint/tslint"
    ],
    "rules": {
        "@typescript-eslint/array-type": "error",
        "@typescript-eslint/interface-name-prefix": "error",
        "@typescript-eslint/member-ordering": "off",
        "@typescript-eslint/no-empty-function": "off",
        "@typescript-eslint/no-explicit-any": "off",
        "@typescript-eslint/no-param-reassign": "off",
        "@typescript-eslint/no-parameter-properties": "off",
        "@typescript-eslint/no-use-before-declare": "off",
        "@typescript-eslint/promise-function-async": "off",
        "@typescript-eslint/unbound-method": "off",
        "arrow-body-style": "off",
        "default-case": "off",
        "import/no-default-export": "error",
        "linebreak-style": "off",
        "no-bitwise": "off",
        "no-empty": "off",
        "no-magic-numbers": "off",
        "padding-line-between-statements": [
            "off",
            "error",
            {
                "blankLine": "always",
                "prev": "*",
                "next": "return"
            }
        ],
        "prefer-template": "off",
        "unicorn/filename-case": "off",
        "@typescript-eslint/tslint/config": [
            "error",
            {
                "rules": {
                    "no-implicit-dependencies": [
                        true,
                        "dev"
                    ],
                    "strict-boolean-expressions": [
                        true,
                        "allow-boolean-or-undefined",
                        "allow-number"
                    ]
                }
            }
        ]
    }
};
