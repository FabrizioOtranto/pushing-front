import React, { useContext } from 'react';
import { UserContext } from '../context/userContext';
import { Button, Divider, Flex, Heading, Text, Link } from '@chakra-ui/react';
import { Navigate } from 'react-router-dom';
import { SimpleGrid, Box } from '@chakra-ui/react'


const Alerts = () => {
    const { token, logout, userName } = useContext(UserContext);
    var message;
    if (!token) {
        return <Navigate to="/" replace={true} />;
    }
    const alertMessage = () => {
       alert("This is an alert message")
    }
    const confirmationMessage = () => {
        message = confirm("This is a confirmation message")
        if (message) {
            document.getElementById("result").innerHTML = "Ok"
        }
        else {
            document.getElementById("result").innerHTML = "Cancel"
        }

    }
    const promptMessage = () => {

        message = prompt("this is a prompt message")
        if (message)
            document.getElementById("result").innerHTML = message
        else {
            document.getElementById("result").innerHTML = "Cancel"

        }
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
                    id="logout"
                    name="logout"
                >
                    Logout
                </Button>
            </Flex>
            <Divider borderColor="secondary.500" borderWidth={2} />

            <SimpleGrid columns={[1, null, 3]} spacing='40px' m={20}>
                <Box bg='black.500' height='150px'>
                    <Button
                        _hover={{ bg: 'black.500', color: 'secondary.500' }}
                        fontSize={'2em'}
                        id="alert"
                        name="alert"
                        height="150px"
                        color={"secondary.500"}
                        bg="black.500"
                        onClick={alertMessage}>
                        I'm an alert
                    </Button>
                </Box>
                <Box bg='black.500' height='150px'>
                    <Button
                        _hover={{ bg: 'black.500', color: 'secondary.500' }}
                        fontSize={'2em'}
                        id="prompt"
                        name="prompt"
                        height="150px"
                        color={"secondary.500"}
                        bg="black.500"
                        onClick={promptMessage}>
                        I'm a prompt
                    </Button>
                </Box>
                <Box bg='black.500' height='150px'>
                    <Button
                        _hover={{ bg: 'black.500', color: 'secondary.500' }}
                        fontSize={'2em'}
                        id="confirmationMessage"
                        name="confirmationMessage"
                        height="150px"
                        color={"secondary.500"}
                        bg="black.500"
                        onClick={confirmationMessage}>
                        I'm a confirmation message
                    </Button>
                </Box>
            </SimpleGrid>

            <Flex w="100%" p={3} align="center">
            <Text
                fontSize={"3em"}
                marginLeft={'70px'}
            >
                Result:
            </Text>
                <Text
                    id="result"
                    name="result"
                    cy-get="result"
                    fontSize={"3em"}
                    marginLeft={'30px'}
                    color={"secondary.500"}
                ></Text>
            </Flex>
        </Flex>
    );
};

export default Alerts;
