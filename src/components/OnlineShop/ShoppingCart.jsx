import {
    Button,
    Flex,
    Heading,
    Text,
    SimpleGrid,
    ListItem,
    List
} from '@chakra-ui/react';
import React from 'react';


const ShoppingCart = ({ shopingCartProduct, handleDelete, showShoppingcart, handleShowBuyForm ,handleGoToProducts }) => {
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
            <Flex
                justifyContent={"center"}
                m={"2"}
                align={"center"}
            >
                {shopingCartProduct.length ? (
                    <SimpleGrid columns={[2, null, 2]} spacing="40px" m={15} justifyContent={"center"}>
                        <Button
                            onClick={handleShowBuyForm}
                            bg={"secondary.500"}
                        >Buy
                        </Button>
                    </SimpleGrid>
                ) : null
                }
            </Flex></>
            ) : null
            }
        </>

    );
};

export default ShoppingCart;
