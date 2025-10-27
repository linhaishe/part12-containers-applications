import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react({
    jsxRuntime: "automatic", // 默认就是自动运行时
  })],
  test: {
    globals: true,
    environment: "jsdom",
  },
});
