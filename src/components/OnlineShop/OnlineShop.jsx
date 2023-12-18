import React, { useContext, useState } from "react";
import { Navigate } from "react-router-dom";
import "../../App.css";
import { Heading, Flex, useDisclosure } from "@chakra-ui/react";
import { UserContext } from "../../context/userContext";
import Navbar from "../Navbar";
import ShoppingCart from "./ShoppingCart";
import Products from "./Products";
import Checkout from "./Checkout";
import SuccessBuy from "./SuccessBuy";

const formInitialState = {
  firstName: "",
  lastName: "",
  cardNumber: "",
};
const OnlineShop = () => {
  const { token } = useContext(UserContext);
  const [shopingCartProduct, setShopingCartProduct] = useState([]);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [formInfo, setformInfo] = useState(formInitialState);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [showShoppingcart, setShowShoppingCart] = useState(false);
  const [showProductsList, setShwoProductsList] = useState(true);
  const [showCheckout, setShowCheckout] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [totalPrice, setTotalPrice] = useState("");
  const [showTotalPrice, setShowTotalPrice] = useState(false);
  const [showProductAddedModal, setShowProductAddedModal] = useState(false);
  const [productAddedMessage, setProductAddedMessage] = useState("");
  const [showSuccessBuyInformation, setShowSuccessBuyInformation] =
    useState(false);
  const [showCircularBar, setShowCircularBar] = useState(false);
  const [showSuccessBuyModal, setShowSuccessBuyModal] = useState(false);

  if (!token) {
    return <Navigate to="/" replace={true} />;
  }

  const handleClick = (e, name, price, id) => {
    e.preventDefault();

    const product = {
      name: name,
      price: Number(price),
      id: id,
      amount: 1,
    };

    console.log(product);

    const index = shopingCartProduct.findIndex(
      (prod) => prod.id === product.id
    );

    if (index === -1) {
      setShopingCartProduct([...shopingCartProduct, product]);
    } else {
      setShopingCartProduct((val) => {
        val[index].amount += 1;
        return val;
      });
    }

    setProductAddedMessage(
      `${e.target.name} has been added to the shopping cart`
    );
    setShowProductAddedModal(true);
    onOpen();
  };

  const handleShowShoppingcart = () => {
    setShowShoppingCart(true);
    setShwoProductsList(false);
  };

  const handleGoToProducts = () => {
    setShowShoppingCart(false);
    setShwoProductsList(true);
    setShowCheckout(false);
    setShowTotalPrice(false);
    onClose();
  };
  const handleShowCheckout = () => {
    setShowShoppingCart(false);
    setShowCheckout(true);
    var fullPrice = 0;
    shopingCartProduct.map((shopCartProduct) => {
      fullPrice = fullPrice + shopCartProduct.price;
    });
    setTotalPrice(fullPrice);
  };
  const handleCancelPurchase = () => {
    setShowShoppingCart(true);
    setShowCheckout(false);
  };

  const handleShowTotalPrice = () => {
    var fullPrice = 0;
    shopingCartProduct.map((shopCartProduct) => {
      fullPrice = fullPrice + shopCartProduct.price;
    });
    setTotalPrice(fullPrice);
    setShowTotalPrice(true);
  };

  const handleDelete = (id) => {
    setShopingCartProduct(
      shopingCartProduct.filter((shopCartProduct) => shopCartProduct.id !== id)
    );
  };

  const handleChange = (e) => {
    if (e.target.name == "firstName") {
      setFirstName(e.target.value);
    } else if (e.target.name == "lastName") {
      setLastName(e.target.value);
    } else {
      setCardNumber(e.target.value);
    }
  };

  const handleFirstNameValidation = () => {
    let formIsValid = true;

    if (typeof firstName !== "undefined") {
      if (!firstName.match(/^[a-zA-Z]+$/)) {
        formIsValid = false;
        setErrorMessage("First name cannot have numbers or special characters");
        return formIsValid;
      }
    }
    return formIsValid;
  };

  const handleLastNameValidation = () => {
    let formIsValid = true;

    if (typeof lastName !== "undefined") {
      if (!lastName.match(/^[a-zA-Z]+$/)) {
        formIsValid = false;
        setErrorMessage("Last name cannot have numbers or special characters");
        return formIsValid;
      }
    }
    return formIsValid;
  };

  const handleCardNumberValidation = () => {
    let formIsValid = true;

    if (typeof cardNumber !== "undefined") {
      if (!cardNumber.match(/^[0-9]{16,16}$/)) {
        formIsValid = false;
        setErrorMessage("Card number must have 16 characters");
        return formIsValid;
      }
    }
    return formIsValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      handleFirstNameValidation() &&
      handleLastNameValidation() &&
      handleCardNumberValidation()
    ) {
      setformInfo([
        {
          firstName: firstName,
          lastName: lastName,
          cardNumber: cardNumber,
        },
      ]);
      onOpen();
      setShowSuccessBuyModal(true);
      setShowCircularBar(true);
      setTimeout(() => {
        setShowSuccessBuyInformation(true);
        setShowCircularBar(false);
      }, 10000);
    }
  };

  const handleFinishProcess = () => {
    setShowShoppingCart(false);
    setShwoProductsList(true);
    setShowCheckout(false);
    onClose();
    setShopingCartProduct([]);
    setShowCircularBar(false);
    setShowSuccessBuyInformation(false);
    setShowSuccessBuyModal(false);
  };

  return (
    <>
      <Navbar />
      <Heading my={3} color="secondary.500">
        Online shop
      </Heading>
      <Flex justify="center" direction="column" m="20">
        <Products
          handleClick={handleClick}
          showProductsList={showProductsList}
          handleShowShoppingcart={handleShowShoppingcart}
          productAddedMessage={productAddedMessage}
          showProductAddedModal={showProductAddedModal}
          setShowProductAddedModal={setShowProductAddedModal}
          setProductAddedMessage={setProductAddedMessage}
          onOpen={onOpen}
          isOpen={isOpen}
          onClose={onClose}
        ></Products>
        <ShoppingCart
          shopingCartProduct={shopingCartProduct}
          handleDelete={handleDelete}
          showShoppingcart={showShoppingcart}
          handleShowCheckout={handleShowCheckout}
          handleGoToProducts={handleGoToProducts}
          totalPrice={totalPrice}
          showTotalPrice={showTotalPrice}
          handleShowTotalPrice={handleShowTotalPrice}
        ></ShoppingCart>
        <Checkout
          isOpen={isOpen}
          onClose={onClose}
          handleSubmit={handleSubmit}
          handleChange={handleChange}
          firstName={firstName}
          lastName={lastName}
          cardNumber={cardNumber}
          showCheckout={showCheckout}
          handleCancelPurchase={handleCancelPurchase}
          handleGoToProducts={handleGoToProducts}
          errorMessage={errorMessage}
        ></Checkout>
        <SuccessBuy
          formInfo={formInfo}
          isOpen={isOpen}
          onClose={onClose}
          shopingCartProduct={shopingCartProduct}
          handleFinishProcess={handleFinishProcess}
          totalPrice={totalPrice}
          showSuccessBuyInformation={showSuccessBuyInformation}
          showCircularBar={showCircularBar}
          showSuccessBuyModal={showSuccessBuyModal}
        ></SuccessBuy>
      </Flex>
    </>
  );
};

export default OnlineShop;
