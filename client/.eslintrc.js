module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["google", "plugin:react/recommended"],
  overrides: [
    {
      env: {
        node: true,
        jest: true,
      },
      files: [".eslintrc.{js,cjs}", "tests/**/*"],
      parserOptions: {
        sourceType: "script",
      },
    },
  ],
  parser: "@babel/eslint-parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    babelOptions: {
      presets: ["@babel/preset-react"],
    },
  },
  plugins: ["react"],
  ignorePatterns: ["**/build/**", ".eslintrc.js"],
  rules: {
    "linebreak-style": [
      "error",
      process.platform === "win32" ? "windows" : "unix",
    ],
    complexity: ["error", { max: 2 }],
  },
};