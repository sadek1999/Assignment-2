import eslint from "@eslint/js";
import tseslint from "typescript-eslint";

export default tseslint.config(
  {
    rules: {
      "no-unused-vars": "error",
      "no-console": "warn",
      "no-undef": "error",
      "no-unused-expressions": "error",
      "prefer-const": "error",
    },
  },
  {
    ignores: ["**/node_modules/", "**/dist/"],
    languageOptions: {
      globals: {
        ...globals.node,
      },
    },
  },
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
);
