import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';

import { Button, Flex, Heading } from '@chakra-ui/react';

import Navbar from './Navbar';
import { UserContext } from '../context/userContext';
import { ALERTS } from '../constants/constants';

const Alerts = () => {
    const { token } = useContext(UserContext);

    if (!token) {
        return <Navigate to="/" replace={true} />;
    }

    const handleClick = (e) => {
        const buttonName = e.target.name;
        if (buttonName === 'alert') {
            alert('This is an alert message');
        } else if (buttonName === 'prompt') {
            prompt('this is a prompt message');
        } else {
            confirm('This is a confirmation message');
        }
    };
    return (
        <>
            <Navbar />
            <Heading my={3} color="secondary.500">
                Alerts
            </Heading>
            <Flex justify="space-between" w="80%" mt={10}>
                {ALERTS.map((alert) => (
                    <Button
                        _hover={{ bg: 'black.500', color: 'secondary.500' }}
                        fontSize={'1em'}
                        key={alert.name}
                        id="alert"
                        name={alert.name}
                        height="60px"
                        color={'secondary.500'}
                        bg="black.500"
                        onClick={handleClick}
                    >
                        {alert.title}
                    </Button>
                ))}
            </Flex>
        </>
    );
};

export default Alerts;
