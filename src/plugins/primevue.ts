import PrimeVue from "primevue/config";
import Lara from "@primevue/themes/lara";
import type { App } from "vue";

export default {
  install: (app: App) => {
    app.use(PrimeVue, {
      theme: {
        preset: Lara,
        options: {
          cssLayer: {
            name: "primevue",
            order: "reset, primevue",
          },
        },
      },
    });
  },
};
