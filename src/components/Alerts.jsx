import React, { useContext, useState } from 'react';
import { Navigate } from 'react-router-dom';

import { Button, Flex, Heading, Text, Box, SimpleGrid } from '@chakra-ui/react';

import Navbar from './Navbar';
import { UserContext } from '../context/userContext';
import { ALERTS } from '../constants/constants';



const Alerts = () => {
    const { token } = useContext(UserContext);

    const [result, setResult] = useState(false);
    const [message, setMessage] = useState("");

    if (!token) {
        return <Navigate to="/" replace={true} />;
    }

    const handleClick = (e) => {
        const buttonName = e.target.name;
        if (buttonName === 'alert') {
            alert('This is an alert message');
        } else if (buttonName === 'prompt') {

            let alertMessage = prompt('this is a prompt message')
            if (alertMessage == null) {
                setResult(true)
                setMessage("Cancelled");
            }
            else {
                setResult(true)
                setMessage(alertMessage);
            }
        } else {
            let alertMessage = confirm('This is a confirmation message')
            console.log(alertMessage)
            if (!alertMessage) {
                setResult(true)
                setMessage("Cancelled");
            }
            else {
                setResult(true)
                setMessage("Ok");
            }

        }
    };
    return (
        <>
            <Navbar />
            <Heading my={3} color="secondary.500">
                Alerts
            </Heading>
            <Flex justify="space-between" w="100%" mt={10}  >
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
            <Flex justify="space-between" w="0%" mt={10}>

                <Text
                    fontSize={"50px"}
                    color={"black.500"}>
                    Result:
                </Text>
                <Text
                    id={"message"}
                    name={"message"}
                    marginLeft={"20px"}
                    fontSize={"50px"}
                    color={"secondary.500"}>
                    {!result ? "" : message}
                </Text>

            </Flex>
        </>
    );
};

export default Alerts;
