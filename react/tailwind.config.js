/* eslint-disable no-undef */
const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", flowbite.content()],
    theme: {
        fontFamily: {
            display: ["Montserrat"],
            header: ["League Spartan"],
        },
        extend: {
            colors: {
                "falahrafi-dark": "#101010",
                "falahrafi-green": "#1DCC7C",
                "falahrafi-green-dark": "#069A57",
                "falahrafi-green-light": "#10EF89",
            },
        },
    },
    plugins: [flowbite.plugin()],
};

