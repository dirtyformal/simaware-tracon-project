// Flat ESLint config for the scripts/ helpers.
// Targets the TypeScript source under bin/. Boundaries data is not linted.

import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import globals from 'globals';

export default [
    {
        ignores: ['node_modules/', '.yarn/', '**/*.geojson', '**/*.json'],
    },
    js.configs.recommended,
    ...tseslint.configs.recommended,
    {
        files: ['bin/**/*.ts'],
        languageOptions: {
            globals: {
                ...globals.node,
            },
        },
        rules: {
            '@typescript-eslint/no-unused-vars': [
                'error',
                {argsIgnorePattern: '^_', varsIgnorePattern: '^_'},
            ],
            '@typescript-eslint/no-explicit-any': 'warn',
            'prefer-const': 'error',
            'no-console': 'off',
        },
    },
];
