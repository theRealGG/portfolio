module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'molindo/typescript',
    'molindo/react',
    'molindo/tailwind',
    'plugin:@next/next/recommended',
    'plugin:tailwindcss/recommended',
  ],
  rules: {
    'prettier/prettier': [
      'error',
      { singleQuote: true, bracketSpacing: true, trailingComma: 'all' },
    ],
    'arrow-body-style': ['off'],
    'prefer-arrow-callback': ['off'],
  },
  overrides: [
    {
      files: ['**/*.jsx', '**/*.tsx'],
      parser: '@typescript-eslint/parser',
    },
    {
      files: ['**/*.spec.ts', '**/*.spec.tsx'],
      rules: {
        'import/no-extraneous-dependencies': 'off',
      },
    },
  ],
};
