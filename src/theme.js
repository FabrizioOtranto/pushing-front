import { extendTheme } from '@chakra-ui/react';

export default extendTheme({
    config: {
        initialColorMode: 'light',
    },
    styles: {
        global: {
            'html, body, #root': {
                height: '100%',
            },
            body: {
                bg: '#101010',
            },
        },
    },

    colors: {
        primary: {
            500: '#6565eb',
            300: '#7b7be6',
            100: '#9696e5',
        },
        secondary: {
            500: '#33ffff',
            300: '#88f6f6',
            100: '#affcfc',
        },
        black: {
            500: '#101010',
            300: '#262626',
            100: '#3e3e3e',
        },
        white: '#f3f3f3',
    },
    fonts: {
        body: 'Kumbh Sans, sans-serif',
    },
    components: {
        Button: {
            baseStyle: {
                fontWeight: 700,
            },
        },
    },
});
