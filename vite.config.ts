import { cloudflare } from "@cloudflare/vite-plugin";
import tailwindcss from "@tailwindcss/vite";
import { redwood } from "rwsdk/vite";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [
    redwood(),
    tailwindcss(),
    cloudflare({
      viteEnvironment: {
        name: "worker",
      },
    }),
  ],
});
