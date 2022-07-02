import {
    Text,

} from '@chakra-ui/react';
import React from 'react';
import Navbar from '../Navbar';


const SuccessBuy = ({ 

 }) => {
    return (
        <>
        <Navbar></Navbar>
            <Text
                fontSize={70}
                color={"secondary.500"}
                id="message"
                name="message"
                fontWeight={"bolder"}>
                You have finished buying, the products will be delivered soon
            </Text>
        </>

    );
};

export default SuccessBuy;