import { Heading } from '@chakra-ui/react';
import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import '../App.css';
import { UserContext } from '../context/userContext';
import Navbar from './Navbar';

const DragAndDrop = () => {
    const { token } = useContext(UserContext);

    if (!token) {
        return <Navigate to="/" replace={true} />;
    }
    return (
        <>
            <Navbar />
            <Heading my={3} color="secondary.500">
                Drag And Drop
            </Heading>
        </>
    );
};

export default DragAndDrop;
