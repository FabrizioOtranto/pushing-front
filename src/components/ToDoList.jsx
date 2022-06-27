import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';

import { UserContext } from '../context/userContext';

import Navbar from './Navbar';
import '../App.css';
import { Heading } from '@chakra-ui/react';

const ToDoList = () => {
    const { token } = useContext(UserContext);

    if (!token) {
        return <Navigate to="/" replace={true} />;
    }
    return (
        <>
            <Navbar />
            <Heading my={3} color="secondary.500">
                Todo List
            </Heading>
        </>
    );
};

export default ToDoList;
