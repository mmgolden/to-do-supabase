import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueDevTools from "vite-plugin-vue-devtools";
import postcssNested from "postcss-nested";
import autoprefixer from "autoprefixer";
import postcssSimpleVars from "postcss-simple-vars";
import { formatPrimeVueVariables } from "./src/utils/formatPrimeVueVariables";
// @ts-expect-error no declaration file
import base from "@primevue/themes/lara/base";

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(), vueDevTools()],

  css: {
    postcss: {
      plugins: [
        postcssSimpleVars({
          variables: formatPrimeVueVariables(base.primitive),
        }),
        postcssNested(),
        autoprefixer(),
      ],
    },
  },

  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
