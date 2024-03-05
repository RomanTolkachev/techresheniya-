/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{vue,js,ts,jsx,tsx}",
    ],
    theme: {
        container: {
            center: true,
            padding: '25px'
        },
        extend: {
            screens: {
                'xs': '450px',
            },
            fontSize: {
                base: ['15px', '19px'],
                '14px': ['14px', '18px'],
                '20px': ['20px', '26px'],
                '32px': ['clamp(1.563rem, 0.688rem + 4.667vw, 2rem)', 'clamp(1.875rem, 0.5rem + 7.333vw, 2.563rem)'],
                '12px': ['12px', '15px'],
                'hero-main': ['clamp(6.563rem, -8.291rem + 33.951vw, 13.438rem)','clamp(6.875rem, -9.329rem + 37.037vw, 14.375rem)'], // 105/215 на 700 до 1024; 110/230
                'hero-legend': ['clamp(0.938rem, 0.592rem + 1.842vw, 2.25rem)', 'clamp(1.375rem, 0.98rem + 2.105vw, 2.875rem)'],
                'itemCard-header': ['clamp(0.938rem, 0.775rem + 0.742vw, 1.25rem)', 'clamp(1.188rem, 0.96rem + 1.039vw, 1.625rem)'],
                'itemCard-order': ['clamp(0.688rem, 0.558rem + 0.593vw, 0.938rem)', 'clamp(0.813rem, 0.65rem + 0.742vw, 1.125rem)'],
                'order-header': ['clamp(1.25rem, 0.861rem + 1.78vw, 2rem)', 'clamp(1.625rem, 1.138rem + 2.226vw, 2.563rem)'],
                '15-20': ['clamp(0.938rem, 0.775rem + 0.742vw, 1.25rem)', 'clamp(1.188rem, 0.96rem + 1.039vw, 1.625rem)'],
            },
            fontWeight: {
                thin: '100',
                medium: '400',
                regular: '500',
                bold: '700',
                black: '900',
            },
            fontFamily: {
                "Onest": ["Onest", "sans-serif"]
            },
            colors: {
                'gradient-darker': "#E44D26",
                'gradient-lighter': "#F16529",
                // 'gradient': "linear-gradient(90deg, rgba(228,77,38,1) 0%, rgba(241,101,41,1) 50%)",
                'white': "#FAFAFA",
                'black': "#0D0D0D",
                'gray-dark': "#656565",
                'gray-light': "#ECECEC",
                'gray-burger': "#b1b1b1",
                'transp-button': "rgba(0, 0, 0, 0.10)",
            },
            boxShadow: {
                'orange-no-hover': '0px 4px 9px 0px rgba(241, 101, 41, 0.4)',
                'orange-hover': '0px 7px 15px 0px rgba(241, 101, 41, 0.4)',
                'black-no-hover': '0px 4px 9px 0px rgba(0, 0, 0, 0.70)',
                'black-hover': '0px 7px 15px 0px rgba(0, 0, 0, 0.70)',
            },
            margin: {
                'hero': 'clamp(5.625rem, 7.165rem + -7.582vw, 2.313rem)'
            },
            padding: {
                'legend': 'clamp(0.938rem, 0.576rem + 1.93vw, 2.313rem)'
            },
            width: {
                'ItemCard': 'clamp(9.875rem, 5.364rem + 20.623vw, 18.563rem)',
            },
            height: {
                'itemCard-order': 'clamp(3.125rem, 2.736rem + 1.78vw, 3.875rem)',
            },
            backgroundImage: {
                'hero': "url('/webp/background-image.webp')",
                'hero-mask': "url('/webp/josh-beech-unsplash.svg')",
            },
            gap: {
                'hero': 'clamp(0.313rem, -0.335rem + 3.453vw, 1.875rem)'
            }
        }
    },
    plugins: [],
}
