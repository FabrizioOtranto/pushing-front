import React, { useContext, useState, } from 'react';
import { Navigate } from 'react-router-dom';
import '../../App.css';
import {
    Heading,
    Flex,
    useDisclosure
} from '@chakra-ui/react';
import { UserContext } from '../../context/userContext';
import Navbar from '../Navbar';
import ShoppingCart from "./ShoppingCart"
import Products from "./Products"
import BuyForm from './BuyForm';
import SuccessBuy from './SuccessBuy';

const formInitialState = {
    firstName: '',
    lastName: '',
    cardNumber: ''
};
const OnlineShop = () => {
    const { token } = useContext(UserContext);
    const [shopingCartProduct, setShopingCartProduct] = useState([])
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [formInfo, setformInfo] = useState(formInitialState);
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [cardNumber, setCardNumber] = useState('')
    const [showShoppingcart, setShowShoppingCart] = useState(false)
    const [showProductsList, setShwoProductsList] = useState(true)
    const [showBuyForm, setShowBuyForm] = useState(false)
    const [errorMessage, setErrorMessage] = useState("")

    if (!token) {
        return <Navigate to="/" replace={true} />;
    }

    const handleClick = (e) => {
        e.preventDefault();
        var shopingCartArray = []
        shopingCartProduct.map(elem => {
            shopingCartArray.push(elem.name)
        })
        if (!shopingCartArray.includes(e.target.value)) {
            setShopingCartProduct([
                ...shopingCartProduct,
                {
                    name: e.target.value,
                    id: e.target.id,
                },
            ]);
            alert(`${e.target.value} has been added to the shopping cart`)

        }
        else {
            alert(`${e.target.value} is already in the shoping cart. You cannot add the same product twice`)
        }
    }
    const handleShowShoppingcart = () => {
        setShowShoppingCart(true)
        setShwoProductsList(false)
    }

    const handleGoToProducts = () => {
        setShowShoppingCart(false)
        setShwoProductsList(true)
        setShowBuyForm(false)
        onClose()
    }
    const handleShowBuyForm = () => {
        setShowShoppingCart(false)
        setShowBuyForm(true)
    }
    const handleCancelPurchase = () => {
        setShowShoppingCart(true)
        setShowBuyForm(false)
    }

    const handleDelete = (id) => {
        setShopingCartProduct(shopingCartProduct.filter((shopCartProduct) => shopCartProduct.id !== id));
    };

    const handleChange = (e) => {
        if (e.target.name == "firstName") {
            setFirstName(e.target.value);
        }
        else if (e.target.name == "lastName") {
            setLastName(e.target.value);
        }
        else {
            setCardNumber(e.target.value);
        }
    };

    const handleFirstNameValidation = () => {
        let formIsValid = true;

        if (typeof firstName !== 'undefined') {
            if (!firstName.match(/^[a-zA-Z]+$/)) {
                formIsValid = false;
                setErrorMessage('First name cannot have numbers or special characters');
                return formIsValid;
            }
        }
        return formIsValid;
    };

    const handleLastNameValidation = () => {
        let formIsValid = true;

        if (typeof lastName !== 'undefined') {
            if (!lastName.match(/^[a-zA-Z]+$/)) {
                formIsValid = false;
                setErrorMessage('Last name cannot have numbers or special characters');
                return formIsValid;
            }
        }
        return formIsValid;
    };

    const handleCardNumberValidation = () => {
        let formIsValid = true;

        if (typeof cardNumber !== 'undefined') {
            if (!cardNumber.match(/^[0-9]{16,16}$/)) {
                formIsValid = false;
                setErrorMessage('Card number must have 16 characters');
                return formIsValid;
            }
        }
        return formIsValid;
    };

    const handleSubmit = (e) => {
        e.preventDefault()
        if (handleFirstNameValidation() && handleLastNameValidation() && handleCardNumberValidation()) {
        setformInfo([
            {
                firstName: firstName,
                lastName: lastName,
                cardNumber: cardNumber
            },
        ]);
        onOpen();
    }
    }

    const handleFinishProcess = () => {
        setShowShoppingCart(false)
        setShwoProductsList(true)
        setShowBuyForm(false)
        onClose()
        setShopingCartProduct([])
    }

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
                >

                </Products>
                <ShoppingCart
                    shopingCartProduct={shopingCartProduct}
                    handleDelete={handleDelete}
                    showShoppingcart={showShoppingcart}
                    handleShowBuyForm={handleShowBuyForm}
                    handleGoToProducts={handleGoToProducts}

                >
                </ShoppingCart>
                <BuyForm
                    isOpen={isOpen}
                    onClose={onClose}
                    handleSubmit={handleSubmit}
                    handleChange={handleChange}
                    firstName={firstName}
                    lastName={lastName}
                    cardNumber={cardNumber}
                    showBuyForm={showBuyForm}
                    handleCancelPurchase={handleCancelPurchase}
                    handleGoToProducts={handleGoToProducts}
                    errorMessage={errorMessage}
                >
                </BuyForm>
                <SuccessBuy
                    formInfo={formInfo}
                    isOpen={isOpen}
                    onClose={onClose}
                    shopingCartProduct={shopingCartProduct}
                    handleFinishProcess={handleFinishProcess}
                ></SuccessBuy>
            </Flex>
        </>
    );
};

export default OnlineShop;
