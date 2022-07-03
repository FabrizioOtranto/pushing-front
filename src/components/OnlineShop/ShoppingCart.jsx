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
import Products from './Products';


const ShoppingCart = ({ shopingCartProduct, handleDelete, showShoppingcart,
    handleShowBuyForm, handleGoToProducts, totalPrice, showTotalPrice, handleShowTotalPrice }) => {
    return (
        <>
            {showShoppingcart ? (
                <>
                    <Flex justifyContent={"space-between"}>
                        <Heading
                            color="secondary.500"
                            marginBottom={"3%"}
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
                    {shopingCartProduct.map((shopCartProduct) => (
                        <Flex
                            align="center"
                            bg={"white"}
                            w="100%"
                            key={shopCartProduct.id}
                        >
                            <List
                                w="100%"
                                p={4}
                                align="center"
                            >
                                <ListItem>
                                    <Flex
                                        align="center"
                                        justify="space-between"
                                    >
                                        <Text>1</Text>
                                        <Text
                                        >
                                            {shopCartProduct.name}
                                        </Text>
                                        <Text
                                        >
                                            {shopCartProduct.price}
                                        </Text>

                                        <Button
                                            align={"center"}
                                            onClick={() => handleDelete(shopCartProduct.id)}
                                        >
                                            Remove
                                        </Button>
                                    </Flex>
                                </ListItem>
                            </List>
                        </Flex>
                    ))}
                    {shopingCartProduct.length ? (

                        <>
                            <Flex
                                align={"center"} justifyContent={"right"}>
                                {showTotalPrice ? (
                                    <Flex m={"2em"} direction={'column'}>
                                    <Text
                                        fontSize={"2em"}
                                    >
                                        Total
                                    </Text>
                                        <Text
                                            fontSize={"2em"}
                                            >
                                            {totalPrice}
                                        </Text>
                                        </Flex>

                                ) : <Button
                                    m={"2em"}
                                    onClick={handleShowTotalPrice}
                                >
                                    Show total price
                                </Button>
                                }
                            </Flex>
                            <Flex
                                justifyContent={"center"}
                                m={"2"}
                                align={"center"}
                            >

                                <SimpleGrid columns={[2, null, 2]} spacing="40px" m={15} justifyContent={"center"}>
                                    <Button
                                        onClick={handleShowBuyForm}
                                        bg={"secondary.500"}
                                    >Buy
                                    </Button>
                                </SimpleGrid>
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
