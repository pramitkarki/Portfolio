import localFont from "next/font/local";

// Bahnschrift SemiBold for all paragraph text and body content
export const inter = localFont({
  src: [
    {
      path: "../assets/fonts/bahnschrift.ttf",
      weight: "600",
      style: "normal",
    },
  ],
  variable: "--font-inter",
  display: "swap",
});

// Cooper Black for subheadings and smaller descriptive text
export const mono = localFont({
  src: [
    {
      path: "../assets/fonts/cooper-black.ttf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-mono",
  display: "swap",
});

// Nasalization for all main headings
export const nasalization = localFont({
  src: [
    {
      path: "../assets/fonts/nasalization.otf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-nasalization",
  display: "swap",
});

// Quentine specifically for my name
export const quentine = localFont({
  src: [
    {
      path: "../assets/fonts/quentin.otf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-quentine",
  display: "swap",
});
