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
        extend: {},
    },
    plugins: [],
    purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
};
