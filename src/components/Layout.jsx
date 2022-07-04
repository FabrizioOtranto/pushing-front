import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { Container } from '@chakra-ui/react';
import Login from './Login';
import Home from './Home';
import Waits from './Waits';
import Alerts from './Alerts';
import FormUtils from './FormUtils/FormUtils';
import ToDoList from './Todolist/ToDoList';
import OnlineShop from './OnlineShop/OnlineShop';
import FileUpload from './FileUpload';

const Layout = () => {
    return (
        <Container maxWidth="container.xl">
            <Routes>
                <Route exact path="/home" element={<Home />} />
                <Route exact path="/" element={<Login />} />
                <Route exact path="/home/todolist" element={<ToDoList />} />
                <Route exact path="/home/waits" element={<Waits />} />
                <Route exact path="/home/alerts" element={<Alerts />} />
                <Route exact path="/home/formutils"element={<FormUtils />} />
                <Route exact path="/home/onlineshop"element={<OnlineShop />} />
                <Route exact path="/home/fileupload"element={<FileUpload />} />
            </Routes>
        </Container>
    );
};

export default Layout;
