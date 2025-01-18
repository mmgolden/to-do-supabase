import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueDevTools from "vite-plugin-vue-devtools";
import autoprefixer from "autoprefixer";
import { generateVariables } from "./src/utils/generateVariables";
// @ts-expect-error no declaration file
import base from "@primevue/themes/lara/base";

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(), vueDevTools()],

  css: {
    postcss: {
      plugins: [autoprefixer()],
    },
    preprocessorOptions: {
      scss: {
        additionalData: `${generateVariables(base.primitive)}`,
      },
    },
  },

  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
