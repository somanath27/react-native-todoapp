module.exports = {
  root: true,
  extends: [
    '@react-native',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:prettier/recommended',
  ],
  plugins: ['prettier', '@typescript-eslint', 'jest'],
  parser: '@typescript-eslint/parser',
  rules: {
    'react/jsx-uses-react': 1,
    'react-hooks/exhaustive-deps': 'warn',
  },
};
