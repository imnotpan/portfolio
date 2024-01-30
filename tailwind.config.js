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
            flexa: ['GT Flexa Lt', 'sans-serif'],
            nunito: ['Nunito', 'sans-serif'],
            robotoslab: ['Roboto Slab', 'serif'],
            dugaspro: 'DugasPro'
        },
        textColor: {
          'webkit': '-webkit-text-fill-color',
        },
        lineHeight: {
          'null': '0.8',
          'extra-loose': '2.5',
          '12': '3rem',
        },
        animation: {
            'infinite-scroll': 'infinite-scroll 25s linear infinite',
          },
          keyframes: {
            'infinite-scroll': {
              from: { transform: 'translateX(0)' },
              to: { transform: 'translateX(-100%)' },
            }
          }       
    },
  },
  plugins: [
  ],
}

