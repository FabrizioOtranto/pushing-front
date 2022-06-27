import React, { useContext } from 'react';
import { UserContext } from '../context/userContext';
import { Button, Divider, Flex, Heading, Link } from '@chakra-ui/react';
import { Navigate } from 'react-router-dom';
import "../App.css"


const DragAndDrop = () => {
    const { token, logout, userName } = useContext(UserContext);

    if (!token) {
        return <Navigate to="/" replace={true} />;
    }
    return (
        <Flex direction="column">
            <Flex justify="space-between" w="100%" p={3} align="center">
                <Heading color="black.500">
                    <Link href='home'>
                    Pushing IT
                    </Link>
                    </Heading>
                <Heading color="white">Welcome {userName} 😎 </Heading>
                <Button
                    _hover={{ bg: 'secondary.500', color: 'black.500' }}
                    onClick={logout}
                    bg="black.500"
                    color="white"
                    id = "logout"
                >
                    Logout
                </Button>
            </Flex>
            <Divider borderColor="secondary.500" borderWidth={2} />

            
        </Flex>
    );
};

export default DragAndDrop;
