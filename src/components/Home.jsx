import React, { useContext } from 'react';
import { Navigate, Link } from 'react-router-dom';

import { Text, SimpleGrid, Box } from '@chakra-ui/react';

import Navbar from './Navbar';
import { UserContext } from '../context/userContext';
import { LINKS } from '../constants/constants';

const Home = () => {
    const { token } = useContext(UserContext);

    if (!token) {
        return <Navigate to="/" replace={true} />;
    }
    return (
        <>
            <Navbar />
            <SimpleGrid columns={[2, null, 2]} spacing="40px" m={20}>
                {LINKS.map((link) => (
                    <Box bg="black.500" height="100px" key={link.title}>
                        <Text
                            align="center"
                            fontSize={'2em'}
                            m={6}
                            color={'secondary.500'}
                        >
                            <Link to={link.path} id={link.id}>
                                {link.title}
                            </Link>
                        </Text>
                    </Box>
                ))}
            </SimpleGrid>
        </>
    );
};

export default Home;
