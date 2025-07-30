/** @type {import('tailwindcss').Config} */
module.exports = {

    // safelist:[
    //     'router-link-exact-active',
    //   {
    //     pattern:  /([a-zA-Z]+)-./,
    //   }
    //     ],
    content: [
        './playground/stories/**/*.{vue,ts}',
    ],
    theme: {

        screens: {
            xs: '475px',
            sm: "640px",
            md: "850px",
            lg: "1024px",
            hg: "1050px",
            xl: "1280px",
        },
        fontFamily: {
            sans: ['"Roboto"', 'sans-serif'],
            'display': ['Roboto'],
            'body': ['Roboto'],
        },


        extend: {
            // backgroundImage: {
            //   'lucky-card-pattern': "url('/img/lucky-card.png')",
            //   'footer-texture': "url('/img/footer-texture.png')",
            // },
            animation: {
                'ping-slow': 'pingslow 3s cubic-bezier(0,0,.2,1) infinite',
                wiggle: 'scale 2s cubic-bezier(0,0,.2,1) infinite',
                opacity: 'opacity 2s cubic-bezier(0,0,.2,1)',
                openedWithBounce: 'bounceIn 0.5s both 0.1s',
                opacityback: 'opasitybg 0.5s both 0.1s',
            },
            keyframes: {
                shimmer: {
                    '100%': {
                        transform: 'translateX(100%)',
                    },
                },
                opacity: {
                    '0%': {
                        opacity: 0
                    },
                    '100%': {
                        opacity: 1
                    }
                },
                opasitybg: {
                    '0%': {
                        opacity: '0',
                    },

                    '100%': {
                        opacity: '.8',
                    },
                },
                pingslow: {
                    '75%, 100%': {
                        transform: 'scale(1.5)',
                        opacity: 0
                    },
                },
                scale: {
                    '0%, 100%': {
                        transform: 'scale(1)',
                        // opacity: 0.8
                    },
                    '50%': {
                        transform: 'scale(1.5)',
                        // opacity: 1
                    },
                },
                bounceIn: {
                    '0%': {
                        transform: 'scale(0.1)',
                        opacity: '0',
                    },

                    '60%': {
                        transform: 'scale(1.1)',
                        opacity: '1',
                    },

                    '100%': {
                        transform: 'scale(1)',
                    }
                }
            },
            colors: {
                'lucky-card-1': '#B580FF',
                'lucky-card-2': '#0FA2C6',
                'marque': '#774FF6',
                'main-background': '#ffffff',
                'tournamnet1': 'rgba(23, 29, 36, 47%)',
                'tournamnet2': 'rgba(20, 89, 217, 47%)',
                'tournamnet3': 'rgba(5, 53, 145, 47%)',
                'promotions': '#5D5CFD',
                'transparent': 'transparent',
                'black': '#0c0d0f',
                'black-light': '#101113',
                'black-light-100': '#131b1d',
                'gray': '#4b5054',
                'gray-dark': '#151a1d',
                'gray-light': '#252525',
                'gray-light-100': 'rgba(37,37,37,0.3)',
                'blue-light': '#6f68ff',
                'blue-dark': '#5b58fd',
                'white': '#feffff',
                'primary': '#aaf960',
                'button-active': '#5d5cfd',
                'primary-button': '#aaf960',
                'primary-button-hover': '#004e82',
                'primary-button-text': '#151a1d',
                'primary-text': '#ffffff',
                'primary-text-hover': '#aaf960',
                'primary-text-active': '#aaf960',
                'primary-text-light': '#B5BEC6',
                'neutrals-background-1': '#0C0D0F',
                'neutrals-background-2': '#0F1113',
                'neutrals-dark-1': '#171A1C',
                'neutrals-dark-2': '#22262C',
                'neutrals-dark-3': '#2C3135',
                'neutrals-dark-4': '#6B747B',
                'neutrals-dark-5': '#2B3038',
                'neutrals-white': '#FFFFFF',
                'neutrals-light-1': '#F5F5F7',
                'neutrals-light-2': '#EDEDF0',
                'neutrals-light-3': '#E9E9EA',
                'neutrals-light-4': '#CED7DE',
                'neutrals-light-5': '#B5BEC6',
                'neutrals-subtle': '#161616',
                'neutrals-gray-3': '#262626',
                'neutrals-gray-5': '#787878',
                'neutrals-gray-light-1': '#A7A7A7',
                'neutrals-gray-light-2': '#CACACA',
                'violet-1': '#774FF6',
                'violet-2': '#9177E9',
                'bronze': '#F2A347',
                'gold': '#F1C733',
                'error': '#F65050',
                'additional-error': '#F65066',
                'blog-gradient-1': '#AF46FE',
                'blog-gradient-2': '#CF5CFF',
                'tournamnet1': 'rgba(23, 29, 36, 47%)',
                'tournamnet2': 'rgba(20, 89, 217, 47%)',
                'tournamnet3': 'rgba(5, 53, 145, 47%)',
                'errorPage-textColor': '#000000',
                'color-meadow': '#18A34A',
            },
            gridColumn: {
                'span-13': 'span 13 / span 13',
                'span-14': 'span 14 / span 14',
                'span-15': 'span 15 / span 15',
                'span-16': 'span 16 / span 16',
                'span-17': 'span 17 / span 17',
                'span-18': 'span 18 / span 18',
                'span-19': 'span 19 / span 19',
                'span-20': 'span 20 / span 20',
                'span-21': 'span 21 / span 21',
                'span-22': 'span 22 / span 22',
                'span-23': 'span 23 / span 23',
                'span-24': 'span 24 / span 24',
                'span-25': 'span 25 / span 25',
                'span-26': 'span 26 / span 26',
                'span-27': 'span 27 / span 27',
                'span-28': 'span 28 / span 28',
                'span-29': 'span 29 / span 29',
                'span-30': 'span 30 / span 30',
                'span-31': 'span 31 / span 31',
                'span-32': 'span 32 / span 32',
            },
            gridTemplateColumns: {
                // Simple 16 column grid
                '32': 'repeat(32, minmax(0, 1fr))',

                // Complex site-specific column configuration
                'footer': '400px minmax(900px, 1fr) 100px',
            }
        },
    },
    plugins: [
    ],
}

