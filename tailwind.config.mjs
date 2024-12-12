import animations from "@midudev/tailwind-animations";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      letterSpacing: {
        "ultra-wide": ".25em", // Un espaciado extremadamente amplio
        "mega-wide": ".8em",
      },
      gridTemplateRows: {
        16: "repeat(16, minmax(0, 1fr))",
      },
    },
  },
  plugins: [animations],
};
