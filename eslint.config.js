import cypress from 'eslint-plugin-cypress'
import tseslint from '@typescript-eslint/eslint-plugin'
import tsParser from '@typescript-eslint/parser'

export default [
  {
    files: ['cypress/**/*.ts'],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        project: false,
        ecmaVersion: 2020,
        sourceType: 'module',
      },
    },
    plugins: {
      '@typescript-eslint': tseslint,
      cypress,
    },
    rules: {
      ...tseslint.configs.recommended.rules,
      ...cypress.configs.recommended.rules,
      '@typescript-eslint/no-explicit-any': 'warn',
      'cypress/no-unnecessary-waiting': 'error',
      'cypress/assertion-before-screenshot': 'warn',
    },
  },
]