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
} from '@chakra-ui/react';
import React from 'react';


const SuccessBuy = ({ isOpen, onClose, formInfo, shopingCartProduct, handleFinishProcess, totalPrice }) => {
    return (
        <>
            {formInfo.length ? (
                <Modal isOpen={isOpen} onClose={onClose} closeOnOverlayClick={false}>
                    <ModalOverlay />
                    <ModalContent>
                        <ModalHeader
                            m={"1"}
                        >Purchase has been completed successfully</ModalHeader>
                        <ModalCloseButton />
                        <ModalBody>
                            <Text>{formInfo[0].firstName} {formInfo[0].lastName} has succesfully purchased the following items</Text>

                            {shopingCartProduct.map((shopCartProduct) => (
                                <Text key={shopCartProduct.id}>{shopCartProduct.name}</Text>
                            ))}
                            <Text>The credit card used was {formInfo[0].cardNumber}</Text>
                            <Text>You have spent ${totalPrice} </Text>

                            
                            
                        </ModalBody>
                        <ModalFooter>
                        <Button bg={"secondary.500"} mr={3} onClick={handleFinishProcess}>
                                Thank you
                            </Button>
                        </ModalFooter>
                    </ModalContent>
                </Modal>
            ) : null
            }
        </>

    );
};

export default SuccessBuy;