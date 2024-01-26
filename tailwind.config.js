/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {

    extend: {
        fontFamily: {
            archivoblack: ['Archivo Black', 'sans-serif'],
            ibmmono: ['IBM Plex Mono', 'monospace'],
            nunito: ['Nunito', 'sans-serif'],
            dugaspro: 'DugasPro'
        },
        textColor: {
          'webkit': '-webkit-text-fill-color',
        },
        lineHeight: {
          'null': '0.8',
          'extra-loose': '2.5',
          '12': '3rem',
        }
    },
  },
  plugins: [
  ],
}

