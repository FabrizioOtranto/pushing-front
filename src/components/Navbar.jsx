import React, { useContext } from 'react';
import { UserContext } from '../context/userContext';
import { Button, Divider, Flex, Heading } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const { logout, userName } = useContext(UserContext);
    let randonNumber = Math.floor(Math.random() *10)
    let usernameID = `user_${userName}_${randonNumber}`

    return (
        <Flex direction="column">
            <Flex justify="space-between" w="100%" p={3} align="center">
                <Heading color="black.500">
                    <Link to="/">Pushing IT</Link>
                </Heading>
                <Heading 
                color="white"
                id={usernameID}
                >
                    Welcome {userName} 😎 
                </Heading>
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
        </Flex>
    );
};

export default Navbar;
