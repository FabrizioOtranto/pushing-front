import {
    Button,
    Flex,
    Heading,
    Text,
    SimpleGrid,
    ListItem,
    List,
    Box
} from '@chakra-ui/react';
import React from 'react';
import { Helmet } from "react-helmet";

const ShoppingCart = ({ shopingCartProduct, handleDelete, showShoppingcart,
    handleShowCheckout, handleGoToProducts, totalPrice, showTotalPrice, handleShowTotalPrice }) => {
    return (
        <>
            {showShoppingcart ? (
                <>
                    <Helmet>
                        <title>Shoping Cart</title>
                    </Helmet>
                    <Flex justifyContent={"space-between"}>
                        <Heading
                            color="secondary.500"
                            marginBottom={"3%"}
                            id="title"
                        >
                            Shopping Cart
                        </Heading>
                        <Button
                            onClick={handleGoToProducts}
                            _hover={{ bg: 'secondary.500', color: 'black.500' }}
                        >

                            Go to products
                        </Button>
                    </Flex>
                    <List
                        w="100%"
                        p={4}
                        align="center"
                    >
                        <SimpleGrid
                            bg={"white"}
                            w="100%"
                            direction="column"
                        >
                            <SimpleGrid
                                columns={[4, null, 4]} spacing="40px" m={15}
                                bg={"white"}
                                w="98%"
                                direction="column"
                            >

                                <Text><b>Quantity</b></Text>
                                <Text><b>Product</b></Text>
                                <Text><b>Price</b></Text>
                            </SimpleGrid>
                            {shopingCartProduct.map((shopCartProduct) => (
                                <ListItem
                                    key={shopCartProduct.id}>
                                    <SimpleGrid
                                        columns={[4, null, 4]} spacing="40px" m={15}
                                        bg={"white"}
                                        w="98%"
                                        direction="column"
                                        key={shopCartProduct.id}
                                    >
                                        <Text>1</Text>
                                        <Text
                                        >
                                            {shopCartProduct.name}
                                        </Text>
                                        <Text
                                        >
                                            ${shopCartProduct.price}
                                        </Text>

                                        <Button
                                            align={"center"}
                                            onClick={() => handleDelete(shopCartProduct.id)}
                                        >
                                            Remove
                                        </Button>
                                    </SimpleGrid>
                                </ListItem>


                            ))}
                        </SimpleGrid>
                    </List>

                    {shopingCartProduct.length ? (

                        <>
                            <Flex
                                align={"center"} justifyContent={"right"} w="98%">
                                {showTotalPrice ? (

                                    <Flex m={"1em"} direction={'column'}>
                                        <Text
                                            fontSize={"2em"}
                                        >
                                            <b>Total $</b>
                                        </Text>
                                        <Text
                                            fontSize={"2em"}
                                            id={'price'}
                                        >
                                            <b>{totalPrice}</b>
                                        </Text>
                                    </Flex>
                                ) : <Button
                                    onClick={handleShowTotalPrice}
                                    m={"1em"}
                                >
                                    Show total price
                                </Button>

                                }
                            </Flex>
                            <Flex
                                justifyContent={"center"}
                                align={"center"}
                            >

                                <Box spacing="40px" m={15} justifyContent={"center"}>
                                    <Button
                                        onClick={handleShowCheckout}
                                        bg={"secondary.500"}
                                    >Go to Checkout
                                    </Button>
                                </Box>
                            </Flex></>

                    ) : null
                    }
                </>
            ) : null
            }
        </>

    );
};

export default ShoppingCart;
