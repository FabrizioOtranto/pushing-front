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
  IconButton,
  Tooltip,
  Skeleton,
  HStack,
} from "@chakra-ui/react";
import React, { useContext, useEffect, useState } from "react";

import {
  BASE_URL,
  PRODUCTS,
  PRODUCTS_PER_PAGE,
} from "../../constants/constants";
import { Helmet } from "react-helmet";
import { UserContext } from "../../context/userContext";

import { IconShoppingCartPlus, IconEdit, IconTrash } from "@tabler/icons-react";

const Products = ({
  handleClick,
  showProductsList,
  handleShowShoppingcart,
  showProductAddedModal,
  productAddedMessage,
  isOpen,
  onClose,
}) => {
  const { token } = useContext(UserContext);

  const [preLoading, setPreLoading] = useState(true);
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState(
    PRODUCTS.slice(0, PRODUCTS_PER_PAGE)
  );
  const [currentPage, setCurrentPage] = useState(1);
  const [maxPages, setMaxPages] = useState(1);

  useEffect(() => {
    fetch(
      `${BASE_URL}/products?page=${currentPage}&limit=${PRODUCTS_PER_PAGE}`,
      {
        method: "get",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    )
      .then(async (res) => {
        try {
          const data = (await res.json())["products"];

          setProducts(data["docs"]);
          setLoading(false);
          setPreLoading(false);
          setMaxPages(data["totalPages"]);
        } catch (e) {
          console.log(e);
        }
      })
      .catch((res) => {
        console.log(res);
      });
  }, [currentPage, setProducts, setMaxPages, setLoading]);

  return (
    <>
      {showProductsList ? (
        <>
          <Helmet>
            <title>Products</title>
          </Helmet>
          <Heading color="secondary.500" id="title">
            Products
          </Heading>
          <Skeleton isLoaded={!preLoading}>
            <HStack spacing="2" mt="4" justify="center">
              {[...Array(maxPages)].map((_, index) => (
                <Button
                  key={index}
                  _hover={{ bg: "secondary.500", color: "black.500" }}
                  onClick={() => {
                    setLoading(true);
                    setCurrentPage(index + 1);
                  }}
                  bg={currentPage === index + 1 ? "secondary.500" : undefined}
                >
                  {index + 1}
                </Button>
              ))}
            </HStack>
          </Skeleton>
          <FormControl>
            <Flex justify="center" direction="column">
              <SimpleGrid columns={[4, null, 4]} spacing="40px" m={15}>
                {products.map((product) => (
                  <Skeleton isLoaded={!loading} key={product._id}>
                    <Box height="100%" align="center" justifyContent={"center"}>
                      <Image
                        src={product.img}
                        alt="Dan Abramov"
                        boxSize="300px"
                      />
                      <Text
                        fontSize={"2em"}
                        m={1}
                        color={"Black.500"}
                        id="name"
                      >
                        {product.name}
                      </Text>
                      <Text fontSize={"1.5em"} m={1} id="price">
                        Price: {product.price}
                      </Text>
                      <Box
                        __css={{
                          display: "flex",
                          justifyContent: "center",
                          gap: "1vw",
                        }}
                      >
                        <Tooltip label="Edit">
                          <IconButton
                            _hover={{ bg: "secondary.500", color: "black.500" }}
                            name={product.name}
                            //onClick={handleClick}
                            id={product._id}
                            value={product.price}
                            aria-label="Edit"
                            icon={<IconEdit />}
                          />
                        </Tooltip>
                        <Tooltip label="Delete">
                          <IconButton
                            _hover={{ bg: "secondary.500", color: "black.500" }}
                            name={product.name}
                            //onClick={handleClick}
                            id={product._id}
                            value={product.price}
                            aria-label="Add to cart"
                            icon={<IconTrash />}
                          />
                        </Tooltip>
                        <Tooltip label="Add to cart">
                          <IconButton
                            _hover={{ bg: "secondary.500", color: "black.500" }}
                            onClick={(e) => {
                              handleClick(
                                e,
                                product.name,
                                product.price,
                                product._id
                              );
                            }}
                            aria-label="Add to cart"
                            icon={<IconShoppingCartPlus />}
                          />
                        </Tooltip>
                      </Box>
                    </Box>
                  </Skeleton>
                ))}
              </SimpleGrid>
              <Flex m={"10"} align={"center"} justifyContent={"center"}>
                <Button
                  bg={"secondary.500"}
                  onClick={handleShowShoppingcart}
                  id="goShoppingCart"
                  icon
                >
                  Go to shopping cart
                </Button>
              </Flex>
            </Flex>
          </FormControl>
        </>
      ) : null}
      {showProductAddedModal ? (
        <Modal isOpen={isOpen} onClose={onClose} closeOnOverlayClick={false}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader m={"1"}>Message alert</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Text>{productAddedMessage}</Text>
            </ModalBody>
            <ModalFooter>
              <Button
                bg={"secondary.500"}
                mr={3}
                onClick={onClose}
                id="closeModal"
              >
                Close
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      ) : null}
    </>
  );
};

export default Products;
