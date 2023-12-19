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
  useDisclosure,
  Input,
  FormLabel,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
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
  setProductAddedMessage,
  setShowProductAddedModal,
  onOpen,
}) => {
  const { token } = useContext(UserContext);

  const [preLoading, setPreLoading] = useState(true);
  const [isButtonDisabled, setDisabledButton] = useState(true);
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState(
    PRODUCTS.slice(0, PRODUCTS_PER_PAGE)
  );
  const [currentPage, setCurrentPage] = useState(1);
  const [maxPages, setMaxPages] = useState(1);

  const getProducts = () => {
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
  };

  const [editingProduct, setEditingProduct] = useState(undefined);
  const editingDisclosure = useDisclosure();

  const [deletingProduct, setDeletingProduct] = useState(undefined);
  const deletingDisclosure = useDisclosure();

  const saveEdit = async (product) => {
    setDisabledButton(true);
    editingDisclosure.onClose();

    try {
      const res = await fetch(`${BASE_URL}/product/${product._id}`, {
        method: "put",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: product.name,
          price: Number(product.price),
          img: product.img,
        }),
      });

      console.log(res, await res.json());

      if (res.status === 202) {
        getProducts();

        setProductAddedMessage(`${product.name} has been edited`);
        setShowProductAddedModal(true);
        onOpen();
      }
    } catch (e) {
      console.log(e);
    }

    setEditingProduct(undefined);
  };

  const deleteProd = async (product) => {
    editingDisclosure.onClose();

    try {
      const res = await fetch(`${BASE_URL}/product/${product._id}`, {
        method: "delete",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      console.log(res, await res.json());

      if (res.status === 202) {
        getProducts();

        setProductAddedMessage(`${product.name} has been deleted`);
        setShowProductAddedModal(true);
        onOpen();
      }
    } catch (e) {
      console.log(e);
    }

    setDeletingProduct(undefined);
  };

  useEffect(getProducts, [currentPage, setProducts, setMaxPages, setLoading]);

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
                    setProducts(PRODUCTS.slice(0, PRODUCTS_PER_PAGE));
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
                  <Skeleton isLoaded={!loading} key={product.id}>
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
                            onClick={() => {
                              setDisabledButton(
                                !product.name.length ||
                                  product.price <= 0 ||
                                  !product.img.length
                              );
                              setEditingProduct(product);
                              editingDisclosure.onOpen();
                            }}
                            id={`edit-${product.id}`}
                            data-cy={`edit-${product.id}`}
                            value={product.price}
                            aria-label="Edit"
                            icon={<IconEdit />}
                          />
                        </Tooltip>
                        <Tooltip label="Delete">
                          <IconButton
                            _hover={{ bg: "secondary.500", color: "black.500" }}
                            name={product.name}
                            onClick={() => {
                              setDeletingProduct(product);
                              deletingDisclosure.onOpen();
                            }}
                            id={`delete-${product.id}`}
                            data-cy={`delete-${product.id}`}
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
                            id={`add-to-cart-${product.id}`}
                            data-cy={`add-to-cart-${product.id}`}
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
                  data-cy="goShoppingCart"
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
      {editingProduct && (
        <Modal
          isOpen={editingDisclosure.isOpen}
          onClose={editingDisclosure.onClose}
          closeOnOverlayClick={false}
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader m={"1"}>Editing Product</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <FormControl isRequired>
                <FormLabel>Product name</FormLabel>
                <Input
                  value={editingProduct.name}
                  onChange={(e) => {
                    setDisabledButton(!e.target.value.length);
                    setEditingProduct({
                      ...editingProduct,
                      name: e.target.value,
                    });
                  }}
                />
              </FormControl>
              <FormControl isRequired>
                <FormLabel>Product price</FormLabel>

                <Input
                  onChange={(e) => {
                    let amount = e.target.value;

                    if (amount.length === 0) {
                      setDisabledButton(true);
                      setEditingProduct({
                        ...editingProduct,
                        price: "",
                      });
                      return;
                    }

                    if (!amount.match(/^[+]?\d+(\.\d*0?)?$/)) {
                      return;
                    }

                    const index = amount.indexOf(".");

                    if (index > 0 && amount.length > index + 3) {
                      amount = amount.substring(0, index + 3);
                    }

                    if (isButtonDisabled) setDisabledButton(false);

                    setEditingProduct({
                      ...editingProduct,
                      price: amount,
                    });
                  }}
                  value={editingProduct.price}
                />
              </FormControl>
              <FormControl isRequired>
                <FormLabel>Product image url</FormLabel>
                <Input
                  value={editingProduct.img}
                  onChange={(e) => {
                    setDisabledButton(!e.target.value.length);
                    setEditingProduct({
                      ...editingProduct,
                      img: e.target.value,
                    });
                  }}
                />
              </FormControl>
            </ModalBody>
            <ModalFooter>
              <Button
                bg={"secondary.500"}
                mr={3}
                onClick={() => saveEdit(editingProduct)}
                id="saveEdit"
                disabled={isButtonDisabled}
              >
                Save
              </Button>
              <Button
                bg={"secondary.500"}
                mr={3}
                onClick={editingDisclosure.onClose}
                id="cancelEdit"
              >
                Cancel
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      )}
      {deletingProduct && (
        <Modal
          isOpen={deletingDisclosure.isOpen}
          onClose={deletingDisclosure.onClose}
          closeOnOverlayClick={false}
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader m={"1"}>Deleting Product</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Text fontWeight="bold" mb="1rem">
                Are you sure you want to delete {deletingProduct.name}?
              </Text>
            </ModalBody>
            <ModalFooter>
              <Button
                bg={"red.500"}
                mr={3}
                onClick={() => deleteProd(deletingProduct)}
                id="saveEdit"
              >
                Delete
              </Button>
              <Button
                bg={"secondary.500"}
                mr={3}
                onClick={deletingDisclosure.onClose}
                id="cancelEdit"
              >
                Cancel
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      )}
    </>
  );
};

export default Products;
