module.exports = {
  env: {
    es6: true,
    node: true,
  },
  extends: [
    'airbnb-base',
    'plugin:@typescript-eslint/recommended',
    'prettier/@typescript-eslint',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  settings: {
    "import/parsers": {
      '@typescript-eslint/parser': ['.ts', '.tsx']
    },
    "import/resolver": {
      typescript: {}
    },
  },
  plugins: [
    '@typescript-eslint',
  ],
  rules: {
    'import/prefer-default-export': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-member-accessibility': 'off',
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        'js': 'never',
        'ts': 'never',
        'jsx': 'never',
        'tsx': 'never'
      }
    ]
  },
  globals: {
    "it": "readonly",
    "describe": "readonly",
    "expect": "readonly"
  }
};
