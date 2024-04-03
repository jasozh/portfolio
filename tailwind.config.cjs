/** @type {import("tailwindcss").Config} */
const config = {
  prefix: "tw-",

  corePlugins: {
    preflight: false,
  },

  content: ["./src/**/*.{html,js,svelte,ts}"],

  theme: {
    extend: {},
  },

  plugins: [],
};

module.exports = config;
