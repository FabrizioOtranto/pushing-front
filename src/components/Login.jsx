import React, { useContext, useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';

import {
    Button,
    Flex,
    FormControl,
    FormErrorMessage,
    FormLabel,
    Heading,
    Input,
    Text,
} from '@chakra-ui/react';
import { UserContext } from '../context/userContext';
import axios from 'axios';
import { BASE_URL } from '../constants/constants';

const Login = () => {
    const [info, setInfo] = useState({ user: '', pass: '' });
    const [toggleForm, setToggleForm] = useState(true);
    const [loading, setLoading] = useState(false);
    const { login, token } = useContext(UserContext);

    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setInfo({
            ...info,
            [name]: value,
        });
    };

    const register = async () => {
        try {
            const { data } = await axios.post(`${BASE_URL}/register`, {
                user: info.user,
                password: info.pass,
            });

            login(data);
        } catch (error) {
            console.log(error);
        }
    };

    const inicioSesion = async () => {
        try {
            const { data } = await axios.post(`${BASE_URL}/login`, {
                user: info.user,
                password: info.pass,
            });

            login(data);
        } catch (error) {
            console.log(error);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (toggleForm) {
            //petición registro
            register();
            navigate('/home');
        } else {
            //petición login
            inicioSesion();
            navigate('/home');
        }
    };

    if (token) {
        return <Navigate to="/home" replace={true} />;
    }

    return (
        <Flex minH="100vh" justify="center" align="center" direction="column">
            {loading ? (
                <Text color="primary.500">Cargando...</Text>
            ) : (
                <>
                    <Heading color="primary.500" mb={3}>
                        Pushing IT
                    </Heading>

                    <Flex
                        bg="primary.500"
                        borderRadius={5}
                        p={5}
                        direction="column"
                        boxShadow="8px 8px 1px 1px #88f6f6"
                    >
                        <form onSubmit={handleSubmit}>
                            <FormControl isRequired mb={5}>
                                <FormLabel htmlFor="user" color="white">
                                    User
                                </FormLabel>
                                <Input
                                    name="user"
                                    id="user"
                                    type="text"
                                    color="white"
                                    bg="primary.300"
                                    value={info.user}
                                    focusBorderColor="none"
                                    onChange={handleChange}
                                />
                            </FormControl>
                            <FormControl isRequired mb={5}>
                                <FormLabel htmlFor="pass" color="white">
                                    Password
                                </FormLabel>
                                <Input
                                    name="pass"
                                    value={info.pass}
                                    id="pass"
                                    type="password"
                                    color="white"
                                    bg="primary.300"
                                    focusBorderColor="none"
                                    onChange={handleChange}
                                />
                            </FormControl>
                            <Button
                                mt={4}
                                color="black.500"
                                bg="primary.100"
                                type="submit"
                            >
                                {toggleForm ? 'Registrate' : 'Iniciar sesión'}
                            </Button>
                            <Text mt={4}>
                                {toggleForm
                                    ? 'Si ya estás registrado '
                                    : 'Aún no tenés cuenta? '}
                                <Text
                                    as="span"
                                    color="white"
                                    cursor="pointer"
                                    onClick={() => setToggleForm(!toggleForm)}
                                >
                                    {toggleForm
                                        ? 'Iniciá sesión'
                                        : 'Registrate'}
                                </Text>
                            </Text>
                        </form>
                    </Flex>
                </>
            )}
        </Flex>
    );
};

export default Login;
