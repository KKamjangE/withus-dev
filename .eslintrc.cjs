module.exports = {
    root: true,
    env: { browser: true, es2020: true, node: true },
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:react-hooks/recommended',
        'plugin:import/recommended',
    ],
    ignorePatterns: ['dist', '.eslintrc.cjs'],
    parser: '@typescript-eslint/parser',
    plugins: ['react-refresh', 'import'],
    rules: {
        'react-refresh/only-export-components': [
            'warn',
            { allowConstantExport: true },
        ],
        'import/order': [
            'error',
            {
                groups: [
                    ['builtin', 'external'],
                    'internal',
                    ['type', 'parent', 'sibling', 'index'],
                    ['unknown'],
                ],
                pathGroups: [
                    { pattern: '#/**', group: 'internal', position: 'after' },
                ],
                'newlines-between': 'always',
                alphabetize: {
                    order: 'asc',
                    caseInsensitive: true,
                },
            },
        ],
    },
    settings: {
        'import/resolver': { typescript: true },
    },
};
