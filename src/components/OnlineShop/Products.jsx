import {
    Box,
    Button,
    Flex,
    FormControl,
    Text,
    SimpleGrid,
    Heading,
    Image
} from '@chakra-ui/react';
import React from 'react';

import { PRODUCTS } from '../../constants/constants';
import { Helmet } from "react-helmet";


const Products = ({ handleClick, showProductsList, handleShowShoppingcart }) => {
    return (
        <>

            {showProductsList ? (
                <>
                    <Helmet>
                        <title>Products</title>
                    </Helmet>
                    <Heading
                        color="secondary.500">
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
                                        >
                                            {product.name}
                                        </Text>
                                        <Text
                                            fontSize={'1.5em'}
                                            m={1}
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
                                >Go to shopping cart
                                </Button>
                            </Flex>
                        </Flex>
                    </FormControl></>
            ) : null
            }
        </>
    );
};
export default Products;
