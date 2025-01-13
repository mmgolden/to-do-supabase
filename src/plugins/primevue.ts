import PrimeVue from "primevue/config";
import Lara from "@primevue/themes/lara";
import type { App } from "vue";
import type { PrimeVueConfiguration } from "primevue/config";

export default {
  install: (app: App) => {
    const options: PrimeVueConfiguration = {
      theme: {
        preset: Lara,
        options: {
          darkModeSelector: ".dark",
          cssLayer: {
            name: "primevue",
            order: "reset, primevue",
          },
        },
      },
    };

    app.use(PrimeVue, options);
  },
};
