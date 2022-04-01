/**
 * @fileoverview eslint shareable config for javascript projects
 *
 * @see http://eslint.org/docs/developer-guide/shareable-configs.html
 * @see https://google.github.io/styleguide/jsguide.html
 * @see https://prettier.io/docs/en/integrating-with-linters.html
 */

module.exports = {
    env: {
        amd: true,
        browser: true,
        node: true,
        es6: true,
        jest: true
    },
    extends: [
        "plugin:prettier/recommended",
        "eslint:recommended",
        "google",
        "prettier",
        "plugin:react/recommended",
        "plugin:react-hooks/recommended"
    ],
    plugins: ["import"],
    rules: {
        "indent": "off",
        "require-jsdoc": 0,
        "no-unused-vars": "off",
        "react-hooks/exhaustive-deps": "warn",
        "prettier/prettier": [
            "error",
            {
                tabWidth: 4,
                singleQuote: false,
                trailingComma: "none",
                bracketSpacing: false,
                arrowParens: "always",
                quoteProps: "consistent",
                endOfLine: "auto"
            }
        ]
    },
    parserOptions: {
        ecmaVersion: 2020,
        sourceType: "module",
        requireConfigFile: false,
        ecmaFeatures: {
            jsx: true
        }
    }
};
