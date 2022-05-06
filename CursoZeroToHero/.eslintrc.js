module.exports = {
    env: {
      browser: true,
      es6: true,
      node: true,  
    },
    extends: [
      'eslint:recomended',
      'plugin:@typescript-eslint/eslint-recommended',
      'plugin:@typescript-eslint/recommended',
      'plugin:prettier/recommended',  
    ],
    globals: {
       Atomics: 'readonly',
       SharedArrayBuffer: 'readonly', 
    },
    parser: '@typescript-eslint/parser',
    parserOptions: {
       ecmaVersion: 11,
       sourceType: 'module', 
    },
    plugin: ['@typescript-eslint'],
    rules: {
       '@typescript-eslint/no-empty-function': 'off', 
    },
};

