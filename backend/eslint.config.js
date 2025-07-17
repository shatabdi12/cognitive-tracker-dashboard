// backend/eslint.config.js
export default [
  {
    files: ["*.js"],
    ignores: ["node_modules/", "dist/"], // ignore files/folders here instead of .eslintignore
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: "module",
    },
    rules: {
      // your ESLint rules here
      "no-unused-vars": "warn",
      // ...
    },
  },
];
