import { defineConfig, UserConfigExport } from "vite";
import { UserConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import { resolve } from "node:path";

type ViteConfig = UserConfigExport & Pick<UserConfig, "test">;

const config: ViteConfig = {
	plugins: [react()],
	resolve: {
		alias: {
			"@": resolve(__dirname, "./src"),
		},
	},
	test: {
		reporters: "verbose",
		environment: "happy-dom",
	},
};

export default defineConfig(config);
