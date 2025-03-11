import { common, typescript } from "eslint-config-neon";
import merge from "lodash.merge";

/** @type {import('eslint').Linter.Config[]} */
export default [
  ...[...common, ...typescript].map((config) => merge(config, {
    files: ["**/*.ts"],
    rules: {
      "import-x/no-extraneous-dependencies": "off",
      "@stylistic/js/object-property-newline": ["error", { allowAllPropertiesOnSameLine: true }],
    },
    languageOptions: {
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      }
    }
  }))
];