import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    FormControl,
    FormLabel,
    Input,

} from '@chakra-ui/react';

import React from 'react';
import { Link, Navigate } from 'react-router-dom';

const BuyForm = ({ isOpen, onClose, handleSubmit, handleChange, formInfo }) => {
    return (
        <Modal isOpen={isOpen} onClose={onClose} closeOnOverlayClick={false}>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>Buy Form</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <form >
                        <FormControl isRequired mb={5}>
                            <FormLabel htmlFor="firstName" color="black.500">
                                First name
                            </FormLabel>
                            <Input
                                name="firstName"
                                cy-get="firstName"
                                id="FirstName"
                                type="text"
                                color="white"
                                bg="primary.300"
                                value={formInfo.firstName}
                                focusBorderColor="none"
                                onChange={handleChange}
                            />
                        </FormControl>
                        <FormControl isRequired mb={5}>
                            <FormLabel htmlFor="lastName" color="black.500">
                                Last name
                            </FormLabel>
                            <Input
                                name="lastName"
                                value={formInfo.lastName}
                                id="lastName"
                                type="text"
                                color="white"
                                bg="primary.300"
                                focusBorderColor="none"
                                onChange={handleChange}
                            />
                        </FormControl>
                        <FormControl isRequired mb={5}>
                            <FormLabel htmlFor="cardNumber" color="black.500">
                                Card Number
                            </FormLabel>
                            <Input
                                name="cardNumber"
                                value={formInfo.cardNumber}
                                id="cardNumber"
                                type="number"
                                color="white"
                                bg="primary.300"
                                focusBorderColor="none"
                                onChange={handleChange}
                            />
                        </FormControl>
                        <Link to={"successBuy"}>Buy</Link>
                    </form>
                </ModalBody>
                <ModalFooter>
                    <Button colorScheme='blue' mr={3} onClick={onClose}>
                        Close
                    </Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    );
};

export default BuyForm;
