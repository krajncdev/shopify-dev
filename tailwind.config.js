/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        bright_green: '#5ce546',
        dark_green: '#308023',
        darker_green: '#286d1d',
        heading: '#202223',
        paragraph: '#5c5f62',
        border_gray: '#8c9196',
        background_gray: '#f6f6f7',
        background_darker_gray: '#fafbfb',
        bright_blue: '#4090ff',
      },
      backgroundImage: {
        'floor-tiles': `url("data:image/svg+xml,%3Csvg width='50' height='50' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 10h10v10H0V10zM10 0h10v10H10V0z' fill='%23cef9cb' fill-opacity='0.7' fill-rule='evenodd'/%3E%3C/svg%3E")`,
      },
      imageRendering: ['responsive'],
      transitionProperty: {
        height: 'height',
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities(
        {
          '.image-pixelated': {
            'image-rendering': 'pixelated',
          },
        },
        ['responsive']
      );
    },
  ],
};
