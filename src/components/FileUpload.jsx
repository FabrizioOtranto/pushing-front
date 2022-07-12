import React, { useContext, useState } from 'react';
import { UserContext } from '../context/userContext';
import {
    CircularProgress,
    Heading,
    Flex,
    Text,
    Input,
    Button
} from '@chakra-ui/react';

import { Navigate } from 'react-router-dom';

import '../App.css';
import Navbar from './Navbar';
import { Helmet } from "react-helmet";
const FileUpload = () => {
    const { token } = useContext(UserContext);
    const [mensage, setMessage] = useState('');
    const [fileName, setFileName] = useState('');
    const [showMessage, setShowMessage] = useState(false)

    if (!token) {
        return <Navigate to="/" replace={true} />;
    }

    const handleFileName = (e) => {
        setFileName(e.target.files[0].name)
    };

    const handleMessage = () => {
        setMessage(fileName)
        setShowMessage(true)
    }

    return (
        <>
            <Helmet>
                <title>File Upload</title>
            </Helmet>
            <Navbar />
            <Heading color="secondary.500" my={3}>
                File Upload
            </Heading>
            <Text
                align="center"
                justifyContent={"center"}
                fontSize="30px"
                fontWeight={"bolder"}>
                Select the file you would like to upload
            </Text>
            <Flex
                direction="column"
                justify="space-between"
                mt={10}
                align="center"
                justifyContent={"center"}
            >
                <Input
                    _hover={{ bg: 'secondary.500', color: 'black.500' }}
                    onChange={handleFileName}
                    bg="black.500"
                    color="white"
                    id="fileUpload"
                    name="fileUpload"
                    type={"file"}
                />
                <Button
                    _hover={{ bg: 'secondary.500', color: 'black.500' }}
                    onClick={handleMessage}
                    bg="black.500"
                    color="white"
                    id="fileUploadButton"
                    name="fileUploadButton"
                    m={'1em'}
                >
                    Show file name
                </Button>

                {showMessage ? (
                    <Text
                        fontSize={70}
                        color={"secondary.500"}
                        id="message"
                        name="message"
                        fontWeight={"bolder"}>
                        {mensage}
                    </Text>
                ) : null}
            </Flex>
        </>
    );
};

export default FileUpload;
