import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import dotenv from "dotenv";

dotenv.config();

/*
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()]
})

*/
export default ({ mode }) => {
  // Load app-level env vars to node-level env vars.
  const env = loadEnv(mode, process.cwd(), "");

  return defineConfig({
    // To access env vars here use process.env.TEST_VAR
    plugins: [react()],
    env: {
      AWS_ACCESS_KEY_ID: process.env.VITE_AWS_ACCESS_KEY_ID,
      AWS_SECRET_ACCESS_KEY: process.env.VITE_AWS_SECRET_ACCESS_KEY,
      AWS_DEFAULT_REGION: process.env.VITE_AWS_DEFAULT_REGION,
    },
  });
};
