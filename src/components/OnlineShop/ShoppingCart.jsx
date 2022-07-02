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


const ShoppingCart = ({ shopingCartProduct, handleDelete, onOpen}) => {
    return (
        <>
            <Heading
                color="secondary.500"
                marginBottom={"3%"}
            >
                Shopping Cart
            </Heading>
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
                        onClick={onOpen}
                    >Buy
                    </Button>
                </SimpleGrid>
                ) : null
                    }
            </Flex>

        </>
        
    );
};

export default ShoppingCart;
