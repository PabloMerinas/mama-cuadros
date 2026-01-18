/** @type {import('tailwindcss').Config} */
export default {
  theme: {
    extend: {
      colors: {
        bg: "#0b0b0b",
        bgLight: "#151515",
        text: "#f5f5f5",
        muted: "#b5b5b5",
        borderSoft: "rgba(255,255,255,0.15)",
        accent: "#e8e8e8",
      },
      keyframes: {
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        fadeInUp: "fadeInUp 0.8s ease-out",
      },
    },
  },
};
