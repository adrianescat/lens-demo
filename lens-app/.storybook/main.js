const path = require("path");

module.exports = {
  stories: [
    "../components/**/stories/**/*.stories.mdx",
    "../components/**/stories/**/*.stories.@(js|jsx|ts|tsx)",
    "../components/**/**/*.stories.tsx",
    "../components/**/**/*.stories.mdx",
    "../components/**/**/*.stories.@(js|jsx|ts|tsx)",
    "../components/**/**/*.stories.tsx"
  ],
  addons: ['@storybook/addon-actions', '@storybook/addon-knobs', "@storybook/addon-links"],
  presets: [path.resolve(__dirname, './next-preset.js')]
}