import React, { useContext, useState,   } from 'react';
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
    

    if (!token) {
        return <Navigate to="/" replace={true} />;
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setformInfo({
            ...formInfo,
            [name]: value,
        });
    };

    const handleClick = (e) => {
        e.preventDefault();
        setShopingCartProduct([
            ...shopingCartProduct,
            {
                name: e.target.value,
                id: e.target.id,
            },
        ]);

    }

    const handleDelete = (id) => {
        setShopingCartProduct(shopingCartProduct.filter((shopCartProduct) => shopCartProduct.id !== id));
    };
    const handleSubmit = () => {
        
        setformInfo([
            ...formInfo,
            {
                firstName: formInfo.firstName,
                lastName: formInfo.lastName,
                cardNumber: formInfo.cardNumber
            },
        ]);


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
                >

                </Products>
                <ShoppingCart
                    shopingCartProduct={shopingCartProduct}
                    handleDelete={handleDelete}
                    onOpen={onOpen}
                >
                </ShoppingCart>
                <BuyForm
                    isOpen={isOpen}
                    onClose={onClose}
                    handleSubmit={handleSubmit}
                    handleChange={handleChange}
                    formInfo={formInfo}
                >
                </BuyForm>
            </Flex>
        </>
    );
};

export default OnlineShop;
