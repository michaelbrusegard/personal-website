/** @type {import('prettier').Config & import('prettier-plugin-tailwindcss').PluginOptions & import("@trivago/prettier-plugin-sort-imports").PluginConfig} */
const config = {
  singleQuote: true,
  jsxSingleQuote: true,
  tabWidth: 2,
  semi: true,
  printWidth: 160,
  useTabs: false,
  plugins: ['prettier-plugin-tailwindcss'],
};

export default config;
