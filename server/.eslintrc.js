module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  plugins: ['prettier'],
  extends: ['airbnb-base'],
  parserOptions: { ecmaVersion: 13 },
  rules: {
    'import/no-dynamic-require': 'off',
    'global-require': 'off',
  },
};
