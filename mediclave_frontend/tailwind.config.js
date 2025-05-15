/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js,jsx}"],
    theme: {
      extend: {
        animation: {
          blink: 'blink 1s steps(2, start) infinite',
          marquee: "marquee 30s linear infinite",
          'spin-slow': 'spin 20s linear infinite',
        },
        colors: {
          primary: '#F1EFEC', // Custom blue
          secondary: '#D4C9BE', // Custom purple
          accent: '#123458', // Custom yellow
          coal: '#030303', // Custom gray
          one: '#2cafad',
          track: {
          odd: "red",  // Teal
          even: "green", // Blue
          green: 'green-400'
        },
        },
        keyframes: {
          marquee: {
            "0%": { transform: "translateX(100%)" },
            "100%": { transform: "translateX(-100%)" },
          },
          blink: {
            '0%, 100%': { opacity: 1 },
            '0%': { opacity: 0 },
          },
        },
      },
    },
    plugins: [],
  }