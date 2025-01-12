import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import prettierConfig from 'eslint-config-prettier';

export default tseslint.config(
  {
    extends: [
      js.configs.recommended,
      ...tseslint.configs.recommended,
      prettierConfig
    ],
    files: ["**/*.ts"],
    ignores: ["dist", "node_modules"],
    settings: {
      "import/parsers": {
        "@typescript-eslint/parser": [".ts"],
      },
      "import/resolver": {
        typescript: {
          project: "tsconfig.json",
        },
      },
    },
    languageOptions: {
      globals:globals.browser,
    },
    plugins: {},
    rules: {
       "@typescript-eslint/no-unused-vars": [1, { vars: 'all', 'argsIgnorePattern': '^_' }]
    },
  }
);
