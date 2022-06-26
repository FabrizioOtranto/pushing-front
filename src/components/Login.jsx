import React, { useContext, useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';

import {
    Button,
    Flex,
    FormControl,
    FormErrorMessage,
    FormLabel,
    Heading,
    HStack,
    Input,
    Radio,
    RadioGroup,
    Select,
    Stack,
    Text,
} from '@chakra-ui/react';
import { UserContext } from '../context/userContext';
import axios from 'axios';
import { BASE_URL, DAY, GENDER, MONTH, YEAR } from '../constants/constants';

const initialState = {
    user: '',
    pass: '',
    gender: '',
    day: '',
    month: '',
    year: '',
};
const Login = () => {
    const [info, setInfo] = useState(initialState);
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

    const handleChangeRadio = (e) => {
        setInfo({
            ...info,
            gender: e,
        });
    };

    const register = async () => {
        try {
            const { data } = await axios.post(`${BASE_URL}/register`, {
                username: info.user,
                password: info.pass,
                gender: info.gender,
                day: info.day,
                month: info.month,
                year: info.year,
            });

            login(data);
        } catch (error) {
            console.log(error);
        }
    };

    const inicioSesion = async () => {
        try {
            const { data } = await axios.post(`${BASE_URL}/login`, {
                username: info.user,
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
                    <Heading color="black.500" mb={3}>
                        Pushing IT
                    </Heading>

                    <Flex
                        bg="primary.500"
                        borderRadius={5}
                        p={5}
                        mb={10}
                        direction="column"
                        boxShadow="5px 5px 1px 1px #88f6f6, -1px -1px 10px 1px #88f6f6"
                        minW="35%"
                    >
                        <form onSubmit={handleSubmit}>
                            <FormControl isRequired mb={5}>
                                <FormLabel htmlFor="user" color="white">
                                    User
                                </FormLabel>
                                <Input
                                    name="user"
                                    cy-get="user"
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
                            {toggleForm ? (
                                <>
                                    <FormControl
                                        as="fieldset"
                                        isRequired
                                        mb={5}
                                    >
                                        <FormLabel color="white" as="legend">
                                            Gender
                                        </FormLabel>
                                        <RadioGroup
                                            defaultValue="Male"
                                            onChange={handleChangeRadio}
                                            value={info.gender}
                                        >
                                            <HStack spacing="24px">
                                                {GENDER.map((elem, idx) => (
                                                    <Radio
                                                        key={idx}
                                                        value={elem}
                                                    >
                                                        {elem}
                                                    </Radio>
                                                ))}
                                            </HStack>
                                        </RadioGroup>
                                    </FormControl>
                                    <FormControl isRequired mb={5}>
                                        <FormLabel htmlFor="day" color="white">
                                            Day of birth
                                        </FormLabel>
                                        <Select
                                            id="day"
                                            bg="primary.300"
                                            color="black.500"
                                            focusBorderColor="none"
                                            onChange={handleChange}
                                            name="day"
                                        >
                                            {DAY.map((elem, idx) => (
                                                <option 
                                                value={elem}
                                                key={idx}>
                                                    {elem}
                                                </option>
                                            ))}
                                        </Select>
                                    </FormControl>
                                    <FormControl isRequired mb={5}>
                                        <FormLabel
                                            htmlFor="month"
                                            color="white"
                                        >
                                            Month
                                        </FormLabel>
                                        <Select
                                            id="month"
                                            bg="primary.300"
                                            color="black.500"
                                            focusBorderColor="none"
                                            name="month"
                                            onChange={handleChange}
                                        >
                                            {MONTH.map((elem, idx) => (
                                                <option 
                                                value={elem}
                                                key={idx}>
                                                    {elem}
                                                </option>
                                            ))}
                                        </Select>
                                    </FormControl>
                                    <FormControl isRequired mb={5}>
                                        <FormLabel htmlFor="year" color="white">
                                            Year
                                        </FormLabel>
                                        <Select
                                            id="year"
                                            bg="primary.300"
                                            color="black.500"
                                            focusBorderColor="none"
                                            onChange={handleChange}
                                            name="year"
                                        >
                                            {YEAR.map((elem, idx) => (
                                                <option 
                                                value={elem}
                                                key={idx}>
                                                    {elem}
                                                </option>
                                            ))}
                                        </Select>
                                    </FormControl>
                                </>
                            ) : null}
                            <Button
                                mt={4}
                                color="white"
                                bg="black.500"
                                type="submit"
                                _hover={{
                                    bg: 'secondary.300',
                                    color: 'black.500',
                                }}
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
