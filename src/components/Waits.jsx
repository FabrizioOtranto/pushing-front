import React, { useContext, useState } from 'react';
import { UserContext } from '../context/userContext';
import {
    Button,
    CircularProgress,
    Heading,
    Flex,
    Text,
} from '@chakra-ui/react';

import { Navigate } from 'react-router-dom';

import '../App.css';
import Navbar from './Navbar';
import { Helmet } from "react-helmet";
const Waits = () => {
    const [loading, setLoading] = useState(false);
    const { token } = useContext(UserContext);
    const [showMessage, setShowMessage] = useState(false);
    const [color, setColor] = useState(false)
    const [colorMessage, setColorMessage] = useState(false)
    const [message, setMessage] = useState("")
  


    if (!token) {
        return <Navigate to="/" replace={true} />;
    }

    const wait = () => {
        setLoading(true);
        setShowMessage(false)
        setColorMessage(false)
        setTimeout(() => {
            setLoading(false);
            setShowMessage(true)
            setColorMessage(true)
            setColor(false)
            setMessage("You have waited for ten seconds, CONGRATULATIONS")
        }, 10000);
        setTimeout(() => {
            setColor(true)
            setColorMessage(false)
            setMessage("You are a man of patience and have waited fifteen seconds")
        }, 15000);
    };

    return (
        <>
            <Helmet>
                <title>Waits</title>
            </Helmet>
            <Navbar />
            <Heading color="secondary.500" my={3} id="title">
                Waits
            </Heading>
            <Text
                align="center"
                justifyContent={"center"}
                fontSize="30px"
                fontWeight={"bolder"}
                id="description">
                Once you doble click the button, you will see a loading mask during 10 seconds
            </Text>
            <Flex
                direction="column"
                justify="space-between"
                mt={10}
                align="center"
                justifyContent={"center"}
            >
                <Button
                    _hover={{ bg: 'secondary.500', color: 'black.500' }}
                    onDoubleClick={wait}
                    bg="black.500"
                    color="white"
                    id="wait"
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
                {showMessage && (
                    <Text
                        fontSize={70}
                        
                        id="message"
                        name="message"
                        fontWeight={"bolder"}
                        style={{
                            color: color
                                ? '#33ffff'
                                : 'black',
                        }}
                    >
                        {message}
                    </Text>
                )}
                 {colorMessage && (
                <Text
                 fontSize={35}
                 color= "secondary.500"
                 id="colorChangeMessage"
                 name="colorChangeMessage"
                 fontWeight={"bolder"}
             >
                 Wait 5 more seconds
                </Text>
                )}
            </Flex>
        </>
    );
};

export default Waits;
