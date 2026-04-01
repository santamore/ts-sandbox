import { defineConfig } from "@eslint/config-helpers";
import eslint from "@eslint/js";
import eslintConfigPrettier from "eslint-config-prettier";
import globals from "globals";
import tseslint from "typescript-eslint";

export default defineConfig(
    { ignores: ["**/node_modules/**", "**/dist/**", "**/coverage/**"] },
    eslint.configs.recommended,
    ...tseslint.configs.strictTypeChecked,
    {
        languageOptions: {
            ecmaVersion: "latest",
            globals: globals.node,
            parserOptions: {
                projectService: true,
                tsconfigRootDir: import.meta.dirname,
            },
            sourceType: "module",
        },
    },
    {
        files: ["**/*.ts"],
        rules: {
            "@typescript-eslint/no-explicit-any": "error",
            "@typescript-eslint/no-unsafe-type-assertion": "error",
            "@typescript-eslint/ban-ts-comment": [
                "error",
                {
                    minimumDescriptionLength: 10,
                    "ts-check": false,
                    "ts-expect-error": "allow-with-description",
                    "ts-ignore": false,
                    "ts-nocheck": false,
                },
            ],
        },
    },
    {
        files: ["**/*.{mjs,cjs}"],
        ...tseslint.configs.disableTypeChecked,
    },
    eslintConfigPrettier,
);
