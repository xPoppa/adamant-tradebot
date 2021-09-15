module.exports = {
  env: {
    commonjs: true,
    es2021: true,
    node: true,
  },
  extends: [
    'google',
  ],
  parserOptions: {
    ecmaVersion: 12,
  },
  rules: {
    'object-curly-spacing': ['error', 'always'],
    'max-len': ['error',
      { 'code': 131,
        'ignoreTrailingComments': true,
        'ignoreUrls': true,
        'ignoreStrings': true,
        'ignoreTemplateLiterals': true,
        'ignoreRegExpLiterals': true,
      }],
    'require-jsdoc': ['off'],
    'valid-jsdoc': ['off'],
    'no-array-constructor': ['off'],
    'no-caller': ['off'],
    'prefer-promise-reject-errors': ['off'],
    'guard-for-in': ['off'],
    'no-unused-vars': ['off'],
    'padded-blocks': ['off'],
    'new-cap': ['off'],
    'camelcase': ['off'],
  },
};
