// @ts-check
import { defineConfig, fontProviders, svgoOptimizer } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    fonts: [
        {
            provider: fontProviders.fontsource(),
            name: "Figtree",
            cssVariable: "--font-figtree",
            styles: ["normal"],
            weights: ["500", "600", "700", "800"],
        },
    ],
    experimental: {
        svgOptimizer: svgoOptimizer()
    }
});
