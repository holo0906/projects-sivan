module.exports = {
  env: {
    es6: true,
    node: true,
    browser: false,
  },
  extends: "eslint:recommended",
  installedESLint: true,
  plugins: ["import", "promise"],
  parser: "babel-eslint",
  parserOptions: {
    sourceType: "module",
  },
  rules: {
    indent: [
      "error",
      2,
      {
        SwitchCase: 1,
        VariableDeclarator: {
          var: 2,
          let: 2,
          const: 3,
        },
      },
    ],
    "linebreak-style": ["error", "unix"],
    quotes: ["error", "single"],
    semi: ["error", "never"],
    "no-unused-vars": [
      "warn",
      {
        vars: "all",
        args: "after-used",
      },
    ],
    "no-undef": "warn",
    "no-console": "warn",
  },
};
