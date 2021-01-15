module.exports = {
    root: true,
    parser: '@typescript-eslint/parser',
    plugins: [
      '@typescript-eslint',
      'react',
    ],
    extends: [
      'eslint:recommended',
      'plugin:@typescript-eslint/recommended',
      'plugin:react/recommended',
      'plugin:compat/recommended'
    ],
    env: {
        browser: true,
        amd: true,
        node: true,
    },
    settings: {
      react: {
        version: 'detect',
      }
    }
  };