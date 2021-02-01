module.exports = {
  extends: ["react-app"],
  parser: "@typescript-eslint/parser",
  globals: {
    __DEV__: false,
  },
  rules: {
    "react-hooks/exhaustive-deps": 0,
    "react/react-in-jsx-scope": 0,
  },
};
