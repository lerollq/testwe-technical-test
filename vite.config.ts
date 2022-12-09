import { defineConfig, UserConfigExport } from "vite";
import { UserConfig } from "vitest/config";
import react from "@vitejs/plugin-react";

type ViteConfig = UserConfigExport & Pick<UserConfig, "test">;

const config: ViteConfig = {
	plugins: [react()],
	test: {
		reporters: "verbose",
		environment: "happy-dom",
	},
};

export default defineConfig(config);
