/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{vue,js,ts,jsx,tsx}",
    ],
    theme: {
        // screens: {
        //     s: '550px',
        //     sm: "800px",
        //     md: "1024px",
        //     lg: '1200px',
        //     xl: '1440px',
        //     '2xl': "1800px"
        // },
        container: {
            center: true,
            padding: '25px'
            // screens: {
            //     s: '400px',
            //     sm: '600px',
            //     md: '728px',
            //     lg: '820px',
            //     xl: '1000px',
            //     '2xl': '1600px'
            // }
        },
        extend: {
            fontSize: {
                base: ['15px', '19px'],
                '14px': ['14px', '18px'],
                '20px': ['20px', '26px'],
                '32px': ['32px', '41px'],
                '12px': ['12px', '15px'],
                'hero-main': ['clamp(5.625rem, 3.569rem + 10.965vw, 13.438rem)','clamp(6.875rem, 4.112rem + 14.737vw, 17.375rem)'],
                'hero-legend': ['clamp(0.938rem, 0.592rem + 1.842vw, 2.25rem)', 'clamp(1.375rem, 0.98rem + 2.105vw, 2.875rem)'],
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
            }
        }
    },
    plugins: [],
}
