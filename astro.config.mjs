import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";
import { defineConfig } from "astro/config";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  redirects: {
    "/vector-ai/products": "/vector-ai/products/vfit",
  },
  integrations: [tailwind(), icon(), react()],
  site: "https://project-mirage.github.io/vector-ai/",
  base: "/vector-ai",
});
