module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ['plugin:vue/recommended', '@vue/airbnb', '@vue/prettier'],
  rules: {
    'no-unused-vars': ['error', { args: 'none' }],
    'no-else-return': 0,
    'prettier/prettier': 'error'
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
};
