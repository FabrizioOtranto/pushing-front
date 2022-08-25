import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    Text,
    CircularProgress,
    Flex
} from '@chakra-ui/react';
import React from 'react';


const SuccessBuy = ({ isOpen, onClose, formInfo, showSuccessBuyModal, shopingCartProduct, handleFinishProcess, totalPrice, showSuccessBuyInformation, showCircularBar }) => {

    return (

        <>
            {showSuccessBuyModal ? (
                <Modal isOpen={isOpen} onClose={onClose} closeOnOverlayClick={false}>
                    <ModalOverlay />
                    <ModalContent>
                        <ModalHeader
                            m={"1"}
                        >Purchase has been completed successfully</ModalHeader>
                        <ModalCloseButton />
                        <Flex
                            alignContent={"center"}
                            justifyContent={"center"}>
                            {showCircularBar ? (
                                <CircularProgress
                                    size={40}
                                    isIndeterminate
                                    color="secondary.500"
                                    mt={10}
                                />
                            ) : null}
                            {showSuccessBuyInformation ? (
                                <ModalBody
                                    alignContent={"center"}
                                    justifyContent={"center"}
                                >
                                    <Text>{formInfo[0].firstName} {formInfo[0].lastName} has succesfully purchased the following items</Text>
                                    {shopingCartProduct.map((shopCartProduct) => (
                                        <Text
                                            key={shopCartProduct.id}
                                            id={shopCartProduct.name}
                                        >
                                            {shopCartProduct.name}</Text>
                                    ))}
                                    <Text
                                    >The credit card used was
                                    </Text>
                                    <Text
                                        id="creditCard">
                                        {formInfo[0].cardNumber}
                                    </Text>
                                    <Text
                                    id='totalPrice'
                                    >
                                        You have spent ${totalPrice} 
                                        </Text>
                                </ModalBody>
                            ) : null
                            }
                        </Flex>
                        <ModalFooter>
                            {showSuccessBuyInformation ? (
                                <Button bg={"secondary.500"} mr={3} onClick={handleFinishProcess}>
                                    Thank you
                                </Button>
                            ) : null
                            }
                        </ModalFooter>

                    </ModalContent>
                </Modal>
            ) : null
            }
        </>

    );
};

export default SuccessBuy;