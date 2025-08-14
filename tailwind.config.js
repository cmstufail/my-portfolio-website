/** @type {import('tailwindcss').Config} */
export default {
    darkMode: 'class',
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            keyframes: {
                fadeIn: {
                    '0%': { opacity: 0 },
                    '100%': { opacity: 1 },
                },
                slideIn: {
                    '0%': { transform: 'translateX(50px)', opacity: 0 },
                    '100%': { transform: 'translateX(0)', opacity: 1 },
                },
                slideUp: {
                    '0%': { transform: 'translateY(-20px)', opacity: 0 },
                    '100%': { transform: 'translateY(0)', opacity: 1 },
                },
            },
            animation: {
                fadeIn: 'fadeIn 1s ease-out forwards',
                slideIn: 'slideIn 0.5s ease-out forwards',
                slideUp: 'slideUp 1s ease-out forwards',
            },
        },
    },
    plugins: [],
};
