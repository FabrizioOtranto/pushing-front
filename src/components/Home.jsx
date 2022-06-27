import React, { useContext } from 'react';
import { UserContext } from '../context/userContext';
import { Button, Divider, Flex, Heading, Text, Link } from '@chakra-ui/react';
import { Navigate } from 'react-router-dom';
import "../App.css"
import { SimpleGrid, Box } from '@chakra-ui/react'


const Home = () => {
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
                >
                    Logout
                </Button>
            </Flex>
            <Divider borderColor="secondary.500" borderWidth={2} />

            <SimpleGrid columns={[2, null, 2]} spacing='40px' m={20}>
                <Box bg='black' height='100px'>
                    <Text align="center" fontSize={'2em'} m={6} color={"secondary.500"}>
                        <Link href="/todolist">
                            Todo List
                        </Link>
                    </Text>
                </Box>
                <Box bg='black' height='100px'>
                <Text align="center" fontSize={'2em'} m={6} color={"secondary.500"}>
                        <Link href="/waits">
                            Waits
                        </Link>
                    </Text>
                </Box>
                <Box bg='black' height='100px'>
                <Text align="center" fontSize={'2em'} m={6} color={"secondary.500"}>
                        <Link href="/alerts">
                            Alerts
                        </Link>
                    </Text>
                </Box>
                <Box bg='black' height='100px'>
                <Text align="center" fontSize={'2em'} m={6} color={"secondary.500"}>
                        <Link href="/draganddrop">
                            Drag And Drop
                        </Link>
                    </Text>
                </Box>
            </SimpleGrid>
        </Flex>
    );
};

export default Home;
