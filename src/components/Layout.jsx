import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { Container } from '@chakra-ui/react';
import Login from './Login';
import Home from './Home';

const Layout = () => {
    return (
        <Container maxWidth="container.xl">
            <Routes>
                <Route exact path="/home" element={<Home />} />
                <Route exact path="/" element={<Login />} />
            </Routes>
        </Container>
    );
};

export default Layout;
