import React, { useContext, useState } from "react";
import { Navigate } from "react-router-dom";
import "../../App.css";
import { Heading, Flex, useDisclosure } from "@chakra-ui/react";
import { UserContext } from "../../context/userContext";
import Navbar from "../Navbar";
import ShoppingCart from "./ShoppingCart";
import Products from "./Products";
import BillingSummary from "./BillingSummary";
import Checkout from "./Checkout";
import SuccessBuy from "./SuccessBuy";

import { BASE_URL } from "../../constants/constants";

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
  const [showBillingSummary, setShowBillingSummary] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [totalPrice, setTotalPrice] = useState("");
  const [showTotalPrice, setShowTotalPrice] = useState(false);
  const [showProductAddedModal, setShowProductAddedModal] = useState(false);
  const [productAddedMessage, setProductAddedMessage] = useState("");
  const [showSuccessBuyInformation, setShowSuccessBuyInformation] =
    useState(false);
  const [showCircularBar, setShowCircularBar] = useState(false);
  const [showSuccessBuyModal, setShowSuccessBuyModal] = useState(false);
  const [subTotal, setSubtotal] = useState(0);

  const [loadingTotalPrice, setLoadingTotalPrice] = useState(false);

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
      `${product.name} has been added to the shopping cart`
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
    setShowBillingSummary(false);
    setShowCheckout(false);
    setShowTotalPrice(false);
    onClose();
  };
  const handleShowCheckout = () => {
    setShowShoppingCart(false);
    setShowBillingSummary(false);
    setShowCheckout(true);
  };

  const handleShowBillingSummary = () => {
    setShowShoppingCart(false);
    setShowBillingSummary(false);
    setShowCheckout(false);
    setShowBillingSummary(true);
    var fullPrice = 0;
    shopingCartProduct.map((shopCartProduct) => {
      fullPrice = fullPrice + shopCartProduct.price * shopCartProduct.amount;
    });
    setTotalPrice(fullPrice);

  };
  const handleCancelPurchase = () => {
    setShowShoppingCart(true);
    setShowCheckout(false);
    setShowBillingSummary(false);
  };

  const handleShowTotalPrice = async () => {
    setLoadingTotalPrice(true);

    let price = 0;

    try {
      const res = await fetch(`${BASE_URL}/calculate-total-price`, {
        method: "post",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(
          shopingCartProduct.map((p) => {
            return { price: p.price, quantity: p.amount };
          })
        ),
      });

      price = (await res.json())["totalPrice"].toFixed(2);
    } catch (e) {
      console.log(e);
    }

    setLoadingTotalPrice(false);

    setTotalPrice(price);
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    const sellid = Math.floor(Math.random() * 100000)
    if (
      handleFirstNameValidation() &&
      handleLastNameValidation() &&
      handleCardNumberValidation()
    ) {
      setformInfo([
        {
          sellid: sellid,
          firstName: firstName,
          lastName: lastName,
          cardNumber: cardNumber,
        },
      ]);
      onOpen();
      setShowSuccessBuyModal(true);
      setShowCircularBar(true);

      try {
        const res = await fetch(`${BASE_URL}/purchase`, {
          method: "post",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            sellid: sellid,
            firstName: firstName,
            lastName: lastName,
            cardNumber: cardNumber,
            products: shopingCartProduct.map((p) => {
              return { product: p.name, price: p.price, quantity: p.amount, total_price: p.amount * p.price };
            }),
          }),
        });

        if (res.status === 200) {
          setShowSuccessBuyInformation(true);
          setShowCircularBar(false);
        }
      } catch (e) {
        console.log(e);
      }
    }
  };

  const handleFinishProcess = () => {
    setShowShoppingCart(false);
    setShwoProductsList(true);
    setShowCheckout(false);
    setShowBillingSummary(false);
    onClose();
    setShopingCartProduct([]);
    setShowCircularBar(false);
    setShowSuccessBuyInformation(false);
    setShowSuccessBuyModal(false);
    setLoadingTotalPrice(false)
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
          handleShowBillingSummary={handleShowBillingSummary}
          handleGoToProducts={handleGoToProducts}
          totalPrice={totalPrice}
          showTotalPrice={showTotalPrice}
          handleShowTotalPrice={handleShowTotalPrice}
          loadingTotalPrice={loadingTotalPrice}
        ></ShoppingCart>
        <BillingSummary
          isOpen={isOpen}
          onClose={onClose}
          showBillingSummary={showBillingSummary}
          handleGoToProducts={handleGoToProducts}
          totalPrice={totalPrice}
          shopingCartProduct={shopingCartProduct}
          handleShowCheckout={handleShowCheckout}
        ></BillingSummary>
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
