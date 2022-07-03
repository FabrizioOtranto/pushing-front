import {
    Box,
    Button,
    Flex,
    FormControl,
    Text,
    SimpleGrid,
    Heading
} from '@chakra-ui/react';
import React from 'react';

import { PRODUCTS } from '../../constants/constants';

const Products = ({ handleClick, showProductsList, handleShowShoppingcart }) => {
    return (
        <>
            {showProductsList ? (
                <><Heading
                    color="secondary.500">
                    Products
                </Heading><FormControl>
                        <Flex justify="center" direction="column">
                            <SimpleGrid columns={[4, null, 4]} spacing="40px" m={15}>
                                {PRODUCTS.map((product) => (
                                    <Box height="100%" key={product.id}
                                        align="center"
                                        justifyContent={"center"}>
                                        <Text
                                            fontSize={'2em'}
                                            m={4}
                                            color={'Black.500'}
                                        >
                                            {product.name}
                                        </Text>
                                        <Button
                                        _hover={{ bg: 'secondary.500', color: 'black.500' }}
                                            value={product.name}
                                            onClick={handleClick}
                                            id={product.id}
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
