import {
    Box,
    Button,
    Flex,
    FormControl,
    Text,
    SimpleGrid,
    Heading,
    Image,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
} from '@chakra-ui/react';
import React from 'react';

import { PRODUCTS } from '../../constants/constants';
import { Helmet } from "react-helmet";


const Products = ({ handleClick, showProductsList, handleShowShoppingcart, showProductAddedModal, productAddedMessage, isOpen, onClose }) => {
    return (
        <>

            {showProductsList ? (
                <>
                    <Helmet>
                        <title>Products</title>
                    </Helmet>
                    <Heading
                        color="secondary.500" id="title">
                        Products
                    </Heading><FormControl>
                        <Flex justify="center" direction="column">
                            <SimpleGrid columns={[4, null, 4]} spacing="40px" m={15}>
                                {PRODUCTS.map((product) => (
                                    <Box height="100%" key={product.id}
                                        align="center"
                                        justifyContent={"center"}>

                                        <Image
                                            src={product.image}
                                            alt='Dan Abramov'
                                            boxSize='300px' />
                                        <Text
                                            fontSize={'2em'}
                                            m={1}
                                            color={'Black.500'}
                                            id='name'

                                        >
                                            {product.name}
                                        </Text>
                                        <Text
                                            fontSize={'1.5em'}
                                            m={1}
                                            id='price'
                                        >
                                            Price: {product.price}
                                        </Text>
                                        <Button
                                            _hover={{ bg: 'secondary.500', color: 'black.500' }}
                                            value={product.name}
                                            onClick={handleClick}
                                            id={product.id}
                                            name={product.price}
                                        >
                                            Add to cart</Button>
                                    </Box>
                                ))}
                            </SimpleGrid>
                            <Flex
                                m={"10"}
                                align={'center'}
                                justifyContent={"center"}>
                                <Button
                                    bg={"secondary.500"}
                                    onClick={handleShowShoppingcart}
                                    id='goShoppingCart'
                                >Go to shopping cart
                                </Button>
                            </Flex>
                        </Flex>
                    </FormControl></>
            ) : null
            }
            {showProductAddedModal ? (
                                <Modal isOpen={isOpen} onClose={onClose} closeOnOverlayClick={false}>
                                <ModalOverlay />
                                <ModalContent>
                                    <ModalHeader
                                        m={"1"}
                                    >Message alert</ModalHeader>
                                    <ModalCloseButton />
                                    <ModalBody>
                                        <Text>{productAddedMessage}</Text>
                                    </ModalBody>
                                    <ModalFooter>
                                    <Button bg={"secondary.500"} mr={3} onClick={onClose} id="closeModal">
                                            Close
                                        </Button>
                                    </ModalFooter>
                                </ModalContent>
                            </Modal>
            ): 
            null}
        </>
    );
};
export default Products;
