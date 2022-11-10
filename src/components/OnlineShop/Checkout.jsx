import {
    Button,
    Flex,
    FormControl,
    FormLabel,
    Input,
    Heading,
    Text
} from '@chakra-ui/react';

import React from 'react';
import { Helmet } from "react-helmet";
const Checkout = ({ handleSubmit, handleChange, firstName, lastName, cardNumber, showCheckout, handleCancelPurchase, handleGoToProducts, errorMessage }) => {
    return (
        <>

            {showCheckout ? (
                <>
                    <Helmet>
                        <title>Checkout</title>
                    </Helmet>
                    <Flex justifyContent={"space-between"}>
                        <Heading
                            color="secondary.500"
                            marginBottom={"3%"}
                            id="title"
                        >
                            Checkout
                        </Heading>
                        <Button
                            onClick={handleGoToProducts}
                            _hover={{ bg: 'secondary.500', color: 'black.500' }}
                        >
                            Go to products
                        </Button>
                    </Flex>
                    <Flex
                        bg="primary.500"
                        p={5}
                        mb={10}
                        justifyContent="center"
                        align={"center"}
                    >
                        <form onSubmit={handleSubmit}>
                            <Flex justify="center"
                                direction={"column"}
                            >
                                <FormControl isRequired mb={5} m={"2"}>
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
                                        value={firstName}
                                        focusBorderColor="none"
                                        onChange={handleChange} />
                                </FormControl>
                                <FormControl isRequired mb={5} m={"2"}>
                                    <FormLabel htmlFor="lastName" color="black.500">
                                        Last name
                                    </FormLabel>
                                    <Input
                                        name="lastName"
                                        value={lastName}
                                        id="lastName"
                                        type="text"
                                        color="white"
                                        bg="primary.300"
                                        focusBorderColor="none"
                                        onChange={handleChange} />
                                </FormControl>
                                <FormControl isRequired mb={5} m={"2"}>
                                    <FormLabel htmlFor="cardNumber" color="black.500">
                                        Card Number
                                    </FormLabel>
                                    <Input
                                        name="cardNumber"
                                        value={cardNumber}
                                        id="cardNumber"
                                        type="number"
                                        color="white"
                                        bg="primary.300"
                                        focusBorderColor="none"
                                        onChange={handleChange}
                                    />
                                </FormControl>


                                <Text
                                    color={"red"}
                                    align="center"
                                    justifyContent={'center'}
                                    id="errorMessage"
                                    >
                                    {errorMessage}
                                </Text>

                                <FormControl
                                    justify="center"
                                    align="center"
                                >
                                    <Button
                                        type="submit"
                                        _hover={{ bg: 'green', color: 'black.500' }}
                                    >
                                        Purchase
                                    </Button>
                                    <Button
                                        onClick={handleCancelPurchase}
                                        _hover={{ bg: 'red', color: 'black.500' }}
                                        m={"2"}
                                    >
                                        Cancel
                                    </Button>
                                </FormControl>

                            </Flex>
                        </form>
                    </Flex>
                </>

            ) :
                null
            }
        </>
    );
};
export default Checkout;
