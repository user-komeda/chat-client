/* eslint-env node */
require("@rushstack/eslint-patch/modern-module-resolution");

module.exports = {
  root: true,
  extends: [
    "plugin:vue/vue3-essential",
    "eslint:recommended",
    "@vue/eslint-config-typescript/recommended",
    "@vue/eslint-config-prettier",
    "google",
    "plugin:jsdoc/recommended",
    "eslint-config-prettier",
    "prettier",
  ],
  env: {
    "vue/setup-compiler-macros": true,
  },
};
