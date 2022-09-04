import preact from "@preact/preset-vite";
import { defineConfig } from "vite";


// https://vitejs.dev/config/
export default defineConfig({
	server: {
		hmr: {
			protocol: "ws",
			host: "localhost"
		}
	},
	plugins: [preact()]
});
