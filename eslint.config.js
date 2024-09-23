export default {
  parser: '@typescript-eslint/parser',

  parserOptions: {
    project: './tsconfig.json',
    sourceType: 'module',
    ecmaVersion: 'latest',
    ecmaFeatures: {
      jsx: true,
    },
  },

  settings: {
    react: {
      version: 'detect', // Automatically detects the version of React being used to apply appropriate rules.
    },
    'import/resolver': {
      typescript: {
        project: './tsconfig.json', // Point to your tsconfig.json file, which specifies baseUrl
      },
    },
  },

  env: {
    browser: true, // Enable browser global variables: window, document etc.
    es6: true, // This enables ES6 features, let, const, arrow functions etc.
    node: true, // Enable Node.js global variables: process, require
  },

  extends: [
    'eslint:recommended', // Eslint built in rules.
    'plugin:react/recommended', // React specific rules that enforce best practices for React components.
    'plugin:@typescript-eslint/recommended', //Typescript specific rules for linting.
    'plugin:jsx-a11y/recommended', // Adds accessibility rules for JSX, example: alt attributes on images.
    'airbnb-typescript', // Set of rules based on Airbnb popular style guide for Typescript.
    'plugin:prettier/recommended', // Enables prettier recommended rules and disables conflicting Eslint rules.
  ],

  plugins: [
    'react',
    '@typescript-eslint',
    'react-hooks',
    'jsx-a11y',
    'prettier',
  ],

  rules: {
    'prettier/prettier': 'error', // Ensures that any code formatting issues detected by Prettier are flagged as Eslint errors.
    'react/react-in-jsx-scope': 'off', // Must be turned off for React 17+.
    '@typescript-eslint/no-unused-vars': 'warn', // Gives a warning instead of an error for unused vars.
    'react/prop-types': 'off', // Disable rule for requiring prop-types in React components because TS provides type-safety through interfaces and types.
    'jsx-a11y/no-noninteractive-element-interactions': 'warn', // Warns when non-interactive elements like a <div> have click handlers or similar interactions.
  },

  ignoredPatterns: [
    'node_modules/',
    'dist/',
    'build/',
    '*.min.js',
    'coverage/',
    'logs/',
    '*.config.js',
  ],

  files: ['**/*.js', '**/*.jsx', '**/*.ts', '**/*.tsx'],
};
