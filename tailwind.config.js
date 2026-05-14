/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './node_modules/flowbite-react/**/*.js',
    './node_modules/rizzui/dist/*.{js,ts,jsx,tsx}', // ⚠️ Required this line to compile RizzUI style.
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
      Gilroy: ['var(--font-lato)'],
    },
    extend: {
      colors: {
        primary: '#0E69EF',
        secondary: '#999999',
        mainBlack: '#000000',
        lightGray: '#FAFAFA',
        darkGray: '#1B1B1B',
      },
      backgroundImage: {
        herobg: "url('/images/herobg.png')",
        IntersectUp: "url('/images/IntersectUp.png')",
        IntersectDown: "url('/images/IntersectDown.png')",
        rateOne: "url('/images/featuresbg/rateOne.png')",
        rateTwo: "url('/images/featuresbg/rateTwo.png')",
        features1: "url('/images/featuresbg/features1.png')",
        features2: "url('/images/featuresbg/features2.png')",
        features4: "url('/images/featuresbg/features4.png')",
        features5: "url('/images/featuresbg/features5.png')",
        footerbg: "url('/images/footerbg.png')",
        benefit1: "url('/images/benefit1.png')",
        benefit2: "url('/images/benefit2.png')",
        benefit3: "url('/images/benefit3.png')",
      },
      boxShadow: {
        'custom-primary': '4px 4px 25px 0 rgba(90, 103, 216, 0.2)',
        'custom-secondary': '4px 4px 25px 0 rgba(107, 114, 128, 0.2)',
      },
      keyframes: {
        pop: {
          '0%': { transform: 'scale(0.5)', opacity: '0' },
          '80%': { transform: 'scale(1.2)', opacity: '1' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        fadeIn: {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
      },
      animation: {
        pop: 'pop 0.4s ease-out',
        fadeIn: 'fadeIn 0.6s ease-in',
      },
    },
  },
  plugins: [],
};
