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
const Products = ({ handleClick}) => {
    return (
        <>
            <Heading
                color="secondary.500">
                Products
            </Heading>

            <FormControl>
                <Flex justify="center" direction="column" >
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
                                    value={product.name}
                                    onClick={handleClick}
                                    id={product.id}
                                >
                                    Add to cart</Button>
                            </Box>
                        ))}
                    </SimpleGrid>
                </Flex >
            </FormControl>
        </>
    );
};
export default Products;
