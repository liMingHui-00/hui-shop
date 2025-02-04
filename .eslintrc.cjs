/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-typescript',
    '@vue/eslint-config-prettier/skip-formatting',
    // 自动导入
    "./.eslintrc-auto-import.json"
  ],
  parserOptions: {
    ecmaVersion: 'latest'
  },
  // 修改单单词文件报错
  rules: {
    'vue/multi-word-component-names': 'off'
  }
}
