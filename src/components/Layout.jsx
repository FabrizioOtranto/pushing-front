import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { Container } from '@chakra-ui/react';
import Login from './Login';
import Home from './Home';
import ToDoList from './ToDoList';
import Waits from './Waits';
import Alerts from './Alerts';
import DragAndDrop from './DragAndDrop';
import Navbar from './Navbar';

const Layout = () => {
    return (
        <Container maxWidth="container.xl">
            <Routes>
                <Route exact path="/home" element={<Home />} />
                <Route exact path="/" element={<Login />} />
                <Route exact path="/home/todolist" element={<ToDoList />} />
                <Route exact path="/home/waits" element={<Waits />} />
                <Route exact path="/home/alerts" element={<Alerts />} />
                <Route
                    exact
                    path="/home/draganddrop"
                    element={<DragAndDrop />}
                />
            </Routes>
        </Container>
    );
};

export default Layout;
