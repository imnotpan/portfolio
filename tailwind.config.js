/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
        // AQUÍ REEMPLAZAMOS EL BLANCO Y NEGRO PURO
        colors: {
          black: '#121212', // El negro suave de tu fondo
          white: '#E0E0E0', // El blanco mate de tu texto
        },
        fontFamily: {
            archivoblack: ['Archivo Black', 'sans-serif'],
            ibmmono: ['IBM Plex Mono', 'monospace'],
            flexa: ['GT Flexa Lt', 'sans-serif'],
            nunito: ['Nunito', 'sans-serif'],
            robotoslab: ['Roboto Slab', 'serif'],
            dugaspro: 'DugasPro',
            neue: 'Neue Montreal'
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