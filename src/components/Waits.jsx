import React, { useContext } from 'react';
import { UserContext } from '../context/userContext';
import { Button, Container, Divider, Flex, Heading, Link } from '@chakra-ui/react';
import { Navigate } from 'react-router-dom';
import "../App.css"
import { CircularProgress, CircularProgressLabel } from '@chakra-ui/react'



const Waits = () => {
    const { token, logout, userName } = useContext(UserContext);

    if (!token) {
        return <Navigate to="/" replace={true} />;
    }

    const wait = () => {
        setTimeout(() => {
            document.getElementById("result").setAttribute("name", "result");
            document.getElementById("result").setAttribute("class", "result");
            document.getElementById("result").innerHTML = "Has esperado 10 segundos"
            document.getElementById("container").removeAttribute("class", "waiting");
            document.getElementById("container").innerHTML = ""
          }, 10000)
          document.getElementById("container").innerHTML = "espera 10 segundos"
        

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
            <Button
                _hover={{ bg: 'secondary.500', color: 'black.500' }}
                onClick={wait}
                bg="black.500"
                color="white"
                id="logout"
                name="wait">
                button
            </Button>
            <Container id='container' className="waiting"></Container>
            <Container id='result'></Container>
        
        </Flex>
    );
};

export default Waits;
