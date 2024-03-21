import {
  Button,
  Flex,
  Heading,
  Text,
  Box,
  Grid,
  SimpleGrid,
  List,
  ListItem
} from "@chakra-ui/react";

import React from "react";
import { Helmet } from "react-helmet";
const BillingSummary = ({
  showBillingSummary,
  handleGoToProducts,
  totalPrice,
  handleShowCheckout
}) => {

  return (
    <>
      {showBillingSummary ? (
        <>
          <Helmet>
            <title>Checkout</title>
          </Helmet>
          <Flex justifyContent={"space-between"}>
            <Heading color="secondary.500" marginBottom={"3%"} id="title">
              Billing Summary
            </Heading>
            <Button
              onClick={handleGoToProducts}
              data-cy="goProducts"
              _hover={{ bg: "secondary.500", color: "black.500" }}
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
          </Flex>
          <List w="50%" p={1} align="center" marginLeft={250}>
            <SimpleGrid bg={"white"} w="100%" direction="column">
              <ListItem key={'subtotal'}>
                <SimpleGrid
                  columns={[2, null, 2]}
                  spacing="40px"
                  m={15}
                  bg={"white"}
                  w="98%"
                  direction="column"
                  key={'subtotal'}
                >
                  <Text id="subtotalText" name='subtotalText' data-cy="subtotalText">
                    Subtotal
                  </Text>

                  <Text id="subtotalAmount" name='subtotalAmount' data-cy="subtotalAmount">
                  ${totalPrice}
                  </Text>

                </SimpleGrid>

              </ListItem>

            </SimpleGrid>
            <SimpleGrid bg={"white"} w="100%" direction="column">
              <ListItem key={'freight'}>
                <SimpleGrid
                  columns={[2, null, 2]}
                  spacing="20px"
                  m={15}
                  bg={"white"}
                  w="98%"
                  direction="column"
                  key={'freight'}
                >
                  <Text id="freightText" name='freightText' data-cy="freightText">
                    Freight
                  </Text>
                  <Text id="freightAmount" name='freightAmount' data-cy="freightAmount">
                    Free
                  </Text>
                </SimpleGrid>

              </ListItem>

            </SimpleGrid>
            <SimpleGrid bg={"white"} w="100%" direction="column">
              <ListItem key={'totalPrice'}>
                <SimpleGrid
                  columns={[2, null, 2]}
                  spacing="40px"
                  m={15}
                  bg={"white"}
                  w="98%"
                  direction="column"
                  key={'totalPrice'}
                >
                  <Text id="totalPriceText" name='totalPriceText' data-cy="totalPriceText">
                    Total Price
                  </Text>
                  <Text id="totalPriceAmount" name='totalPriceAmount' data-cy="totalPriceAmount">
                  ${totalPrice}
                  </Text>
                </SimpleGrid>

              </ListItem>

            </SimpleGrid>
          </List>
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
  );
};
export default BillingSummary;
