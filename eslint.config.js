// eslint.config.js
import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

export default [
  ...compat.extends(
    "airbnb",
    "airbnb-typescript",
    "airbnb/hooks",
    "next/core-web-vitals",
    "plugin:prettier/recommended"
  ),
  {
    rules: {
      "unused-imports/no-unused-imports": "error",
      "tailwindcss/classnames-order": "warn",
      "react/react-in-jsx-scope": "off",
    },
    plugins: {
      "unused-imports": require("eslint-plugin-unused-imports"),
      "tailwindcss": require("eslint-plugin-tailwindcss"),
    },
  },
];
