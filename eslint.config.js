import { FlatCompat } from '@eslint/eslintrc';
import path from 'path';

// Import plugins directly as objects, not as strings
import typescriptEslintPlugin from '@typescript-eslint/eslint-plugin';
import typescriptEslintParser from '@typescript-eslint/parser';
import reactPlugin from 'eslint-plugin-react';
import prettierPlugin from 'eslint-plugin-prettier';
import a11yPlugin from 'eslint-plugin-jsx-a11y';
import reactHooksPlugin from 'eslint-plugin-react-hooks';

const compat = new FlatCompat({
  baseDirectory: path.resolve(),
});

export default {
  files: ['**/*.{js,jsx,ts,tsx}'],

  ignores: [
    'node_modules/',
    'dist/',
    'build/',
    '*.min.js',
    'coverage/',
    'logs/',
    '*.config.js',
  ],

  languageOptions: {
    parser: typescriptEslintParser,
    sourceType: 'module',
    ecmaVersion: 'latest',
    globals: {
      window: 'readonly', // Browser global
      document: 'readonly', // Browser global
      console: 'readonly', // Allow console usage
      React: 'readonly', // For React JSX (in case you need React in scope)
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

  plugins: {
    '@typescript-eslint': typescriptEslintPlugin,
    react: reactPlugin,
    prettier: prettierPlugin,
    'jsx-a11y': a11yPlugin,
    'react-hooks': reactHooksPlugin,
  },

  rules: {
    'prettier/prettier': 'error', // Ensures that any code formatting issues detected by Prettier are flagged as Eslint errors.
    'react/react-in-jsx-scope': 'off', // Must be turned off for React 17+.
    '@typescript-eslint/no-unused-vars': 'warn', // Gives a warning instead of an error for unused vars.
    'react/prop-types': 'off', // Disable rule for requiring prop-types in React components because TS provides type-safety through interfaces and types.
    'jsx-a11y/no-noninteractive-element-interactions': 'warn', // Warns when non-interactive elements like a <div> have click handlers or similar interactions.
  },
};
