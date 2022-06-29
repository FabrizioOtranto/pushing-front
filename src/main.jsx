import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import './App.css';
import theme from './theme';

import { ChakraProvider } from '@chakra-ui/react';

import '@fontsource/kumbh-sans/400.css';
import '@fontsource/kumbh-sans/700.css';
import { UserContextProvider } from './context/userContext';

ReactDOM.createRoot(document.getElementById('root')).render(
        <ChakraProvider theme={theme}>
            <UserContextProvider>
                <App />
            </UserContextProvider>
        </ChakraProvider>
);
