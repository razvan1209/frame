// eslint.config.js
import js from '@eslint/js';
import globals from 'globals';
import eslintConfigPrettier from 'eslint-config-prettier';
import eslintPluginPrettier from 'eslint-plugin-prettier';
import pluginCypress from 'eslint-plugin-cypress';

// Destructure the recommended Cypress config to access its specific properties.
const cypressRecommended = pluginCypress.configs.recommended;

export default [
  // 1. Base ESLint Recommended Rules (for code quality)
  js.configs.recommended,

  // 2. Cypress-Specific Configuration (applies only to test/support files)
  {
    files: [
      'cypress/e2e/**/*.js',
      'cypress/support/**/*.js',
      'cypress/pages/**/*.js', // Include your POM folders here
    ],

    plugins: {
      cypress: pluginCypress,
    },

    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.mocha,
        // ✅ Explicitly declare Cypress globals
        cy: 'readonly',
        Cypress: 'readonly',
        expect: 'readonly',
        assert: 'readonly',
        before: 'readonly',
        beforeEach: 'readonly',
        after: 'readonly',
        afterEach: 'readonly',
        it: 'readonly',
        describe: 'readonly',
      },
      parserOptions: {
        ecmaVersion: 2022,
        sourceType: 'module',
      },
    },

    rules: {
      // General Recommended Rules
      'no-unused-vars': ['warn', { argsIgnorePattern: '^_|expect' }],
      'no-console': 'off',
      'prefer-const': 'error',
      eqeqeq: ['error', 'always'],

      // Cypress Recommended Rules
      ...cypressRecommended.rules, // Correctly spread the Cypress plugin rules

      // Custom/Overridden Cypress Rules
      'cypress/no-unnecessary-waiting': 'warn',
      'cypress/no-force': 'warn',
    },
  },

  // 3. Prettier Integration
  {
    files: ['**/*.js', '**/*.mjs'],
    plugins: {
      prettier: eslintPluginPrettier,
    },
    rules: {
      'prettier/prettier': 'error',
    },
  },

  // 4. Disable Conflicting Rules (Must be the last item)
  eslintConfigPrettier,

  // 5. Ignore non-source files
  {
    ignores: [
      '**/node_modules/**',
      'package-lock.json',
      'cypress/videos/**',
      'cypress/screenshots/**',
      'cypress/reports/**',
      'cypress/downloads/**',
      'mochawesome-report/**',
      '**/dist/**',
    ],
  },
];
