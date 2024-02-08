import {
  Button,
  Flex,
  Heading,
  Text,
  SimpleGrid,
  ListItem,
  List,
  Box,
} from "@chakra-ui/react";
import React from "react";
import { Helmet } from "react-helmet";

const ShoppingCart = ({
  shopingCartProduct,
  handleDelete,
  showShoppingcart,
  handleShowCheckout,
  handleGoToProducts,
  totalPrice,
  showTotalPrice,
  handleShowTotalPrice,
  loadingTotalPrice,
}) => {
  return (
    <>
      {showShoppingcart ? (
        <>
          <Helmet>
            <title>Shoping Cart</title>
          </Helmet>
          <Flex justifyContent={"space-between"}>
            <Heading color="secondary.500" marginBottom={"3%"} id="title">
              Shopping Cart
            </Heading>
            <Button
              onClick={handleGoToProducts}
              data-cy="goProducts"
              _hover={{ bg: "secondary.500", color: "black.500" }}
            >
              Go to products
            </Button>
          </Flex>
          <List w="100%" p={4} align="center">
            <SimpleGrid bg={"white"} w="100%" direction="column">
              <SimpleGrid
                columns={[5, null, 5]}
                spacing="40px"
                m={15}
                bg={"white"}
                w="98%"
                direction="column"
              >
                <Text>
                  <b>Quantity</b>
                </Text>
                <Text>
                  <b>Product</b>
                </Text>
                <Text>
                  <b>Price</b>
                </Text>
                <Text>
                  <b>Total Price</b>
                </Text>
              </SimpleGrid>
              {shopingCartProduct.map((shopCartProduct) => (
                <ListItem key={shopCartProduct.id}>
                  <SimpleGrid
                    columns={[5, null, 5]}
                    spacing="40px"
                    m={15}
                    bg={"white"}
                    w="98%"
                    direction="column"
                    key={shopCartProduct.id}
                  >
                    <Text id="productAmount" name={shopCartProduct.amount} data-cy="productAmount">
                      {shopCartProduct.amount}
                    </Text>
                    <Text id="productName" name={shopCartProduct.name}data-cy="productName">
                      {shopCartProduct.name}
                    </Text>
                    <Text
                      id="unitPrice"
                      name={shopCartProduct.price * shopCartProduct.amount} data-cy="unitPrice"
                    >
                      $ {shopCartProduct.price}
                    </Text>
                    <Text
                      id="totalPrice"
                      name={shopCartProduct.price * shopCartProduct.amount} data-cy="totalPrice"
                    >
                      $ {shopCartProduct.price * shopCartProduct.amount}
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
              <Flex align={"center"} justifyContent={"right"} w="98%">
                {showTotalPrice ? (
                  <Flex m={"1em"} direction={"column"}>
                    <Text fontSize={"2em"}>
                      <b>Total $</b>
                    </Text>
                    <Text fontSize={"2em"} id={"price"}>
                      <b>{totalPrice}</b>
                    </Text>
                  </Flex>
                ) : (
                  <Button
                    onClick={handleShowTotalPrice}
                    m={"1em"}
                    isLoading={loadingTotalPrice}
                  >
                    Show total price
                  </Button>
                )}
              </Flex>
              <Flex justifyContent={"center"} align={"center"}>
                <Box spacing="40px" m={15} justifyContent={"center"}>
                  <Button
                    onClick={handleShowCheckout}
                    bg={"secondary.500"}
                    data-cy="goCheckout"
                    id="goCheckout"
                  >
                    Go to Checkout
                  </Button>
                </Box>
              </Flex>
            </>
          ) : null}
        </>
      ) : null}
    </>
  );
};

export default ShoppingCart;
