/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [],
    theme: {
        minWidth: {
            80: '20rem',
        },
        flexGrow: {
            0: 0,
            1: 1,
            2: 2,
        },
        extend: {
            keyframes: {
                propel: {
                    '0%': {transform: 'translateX(0)'},
                    '20%': {transform: 'translateX(25%)'},
                    '40%': {transform: 'translateX(-25%)'},
                    '60%': {transform: 'translateX(25%)'},
                    '100%': {transform: 'translateX(-25%)'},
                },
            }
        },
    },
    plugins: [],
    purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
};
