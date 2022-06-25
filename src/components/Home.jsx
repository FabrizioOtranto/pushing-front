import React, { useContext } from 'react';
import { UserContext } from '../context/userContext';
import { Button, Divider, Flex, Heading, Text } from '@chakra-ui/react';
import { Navigate } from 'react-router-dom';

const Home = () => {
    const { token, logout, userName } = useContext(UserContext);

    if (!token) {
        return <Navigate to="/" replace={true} />;
    }
    return (
        <Flex direction="column">
            <Flex justify="space-between" w="100%" p={3} align="center">
                <Heading color="primary.500">Pushing IT</Heading>
                <Button
                    _hover={{ bg: 'primary.300' }}
                    onClick={logout}
                    bg="primary.500"
                    color="white"
                >
                    Logout
                </Button>
            </Flex>
            <Divider borderColor="primary.500" borderWidth={2} />
            <Heading color="white">Welcome {userName} 😎 </Heading>
        </Flex>
    );
};

export default Home;
