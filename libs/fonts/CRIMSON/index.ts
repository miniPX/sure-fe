import localFont from "next/font/local";

export const CRIMSON = localFont({
  src: [
    {
      path: "./CrimsonText-Regular.ttf",
      weight: "400",
      style: "normal",
    },
  ],
  display: "swap", // Recommended for better font loading behavior
});
