import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { Container } from '@chakra-ui/react';
import Login from './Login';
import Home from './Home';
import ToDoList from "./ToDoList"

const Layout = () => {
    return (
        <Container maxWidth="container.xl">
            <Routes>
                <Route exact path="/home" element={<Home />} />
                <Route exact path="/" element={<Login />} />
                <Route exact path="/todolist" element={<ToDoList />} />
            </Routes>
        </Container>
    );
};

export default Layout;
