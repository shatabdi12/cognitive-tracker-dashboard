module.exports = {
    env: {
      node: true,
      es2021: true,
    },
    extends: [
      'eslint:recommended',
      'plugin:node/recommended',
      'prettier',
    ],
    plugins: ['node'],
    parserOptions: {
      ecmaVersion: 12, // ES2021
      sourceType: 'module', // if you use ES modules, else 'script' for commonjs
    },
    rules: {
      // your custom rules if any
    },
  };
  