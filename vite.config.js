// import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react";
// import tailwindcss from "@tailwindcss/vite";

// export default defineConfig({
//   plugins: [react(), tailwindcss()],
// });

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import svgr from "vite-plugin-svgr"; // <- add SVGR plugin
import path from "path"; // <- needed for alias

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    svgr(), // <- enable importing SVGs as React components
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"), // <- now @ works
    },
  },
});
