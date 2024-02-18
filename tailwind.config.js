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
            fontSize: {
                base: ['15px', '19px'],
                '14px': ['14px', '18px'],
                '20px': ['20px', '26px'],
                '32px': ['32px', '41px'],
                '12px': ['12px', '15px'],
                'hero-main': ['clamp(6.25rem, 3.004rem + 14.837vw, 12.5rem)','clamp(8.875rem, 5.11rem + 17.211vw, 16.125rem)'],
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
            }
        }
    },
    plugins: [],
}
