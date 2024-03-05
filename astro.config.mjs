import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";
import { defineConfig } from "astro/config";
import react from "@astrojs/react";

import compress from "astro-compress";

// https://astro.build/config
export default defineConfig({
  redirects: {
    "/vector-ai/products": "/vector-ai/products/vfit"
  },
  integrations: [tailwind(), icon(), react(), compress()],
  site: "https://project-mirage.github.io/vector-ai/",
  base: "/vector-ai"
});