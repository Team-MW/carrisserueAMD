/** @type {import("prettier").Config} */

module.exports = {
  tailwindFunctions: ['clsx', 'cn', 'cva'],
  plugins: [require.resolve("prettier-plugin-tailwindcss")],
  tailwindConfig: "./packages/tailwind/index.js",
  pluginSearchDirs: false
};
