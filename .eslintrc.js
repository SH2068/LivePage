module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["plugin:react/recommended", "standard-with-typescript", "plugin:@next/next/recommended", "prettier"],
  overrides: [],
  parserOptions: {
    project: "**/tsconfig.json",
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react", "@next/eslint-plugin-next"],
  rules: {
    "react/react-in-jsx-scope": "off",
    "@typescript-eslint/no-misused-promises": "off", // HOF를 배우고 나서 wrapAsync 함수로 해결 가능(그 전까지는 off 할 것)
  },
settings: {
    react: {
      version: "detect", // React 버전 자동 감지
    },
  },
};