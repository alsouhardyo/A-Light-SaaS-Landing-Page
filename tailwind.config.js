/** @type {import('tailwindcss').Config} */
const config = {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        screens: {
            sm: "375px",
            md: "768px",
            lg: "1200px",
        },
        extend: {
            container: {
                center: true,
                padding: {
                    DEFAULT: "20px",
                    lg: "80px",
                },
            },
            fontFamily: {
                dmSans: "DM Sans",
            },
        },
    },
    plugins: [],
};

module.exports = config;
