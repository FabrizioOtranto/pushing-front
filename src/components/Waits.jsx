import React, { useContext, useState } from 'react';
import { UserContext } from '../context/userContext';
import {
    Button,
    CircularProgress,
    Heading,
    Flex,
    Text,
    Center,
} from '@chakra-ui/react';

import { Navigate } from 'react-router-dom';

import '../App.css';
import Navbar from './Navbar';

const Waits = () => {
    const [loading, setLoading] = useState(false);
    const { token } = useContext(UserContext);
    const [mensage, setMessage] = useState(false);

    if (!token) {
        return <Navigate to="/" replace={true} />;
    }

    const wait = () => {
        setLoading(true);
        setMessage(false)
        setTimeout(() => {
            setLoading(false);
            setMessage(true)
        }, 10000);
    };

    return (
        <>
            <Navbar />
            <Heading color="secondary.500" my={3}>
                Waits
            </Heading>
            <Text>
                Una vez que cliquees el botón verás el loading durante 10
                segundos
            </Text>
            <Flex
                direction="column"
                justify="space-between"
                align="start"
                mt={10}
            >
                <Button
                    _hover={{ bg: 'secondary.500', color: 'black.500' }}
                    onClick={wait}
                    bg="black.500"
                    color="white"
                    id="logout"
                    name="wait"
                    
                >
                    {loading ? 'Cargando' : 'Button'}
                </Button>
                {loading && (
                    <CircularProgress
                        size={40}
                        isIndeterminate
                        color="secondary.500"
                        mt={10}
                    />
                )}
                {mensage && (
                    <Text 
                    fontSize={70}
                    color={"secondary.500"}
                    >
                        Has esperado que termine el tiempo, felicitaciones!
                    </Text>
                )}
            </Flex>
        </>
    );
};

export default Waits;
