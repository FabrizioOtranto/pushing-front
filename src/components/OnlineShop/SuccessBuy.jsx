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
  Flex,
} from "@chakra-ui/react";
import React from "react";

const SuccessBuy = ({
  isOpen,
  onClose,
  formInfo,
  showSuccessBuyModal,
  shopingCartProduct,
  handleFinishProcess,
  totalPrice,
  showSuccessBuyInformation,
  showCircularBar,
}) => {
  return (
    <>
      {showSuccessBuyModal ? (
        <Modal isOpen={isOpen} onClose={onClose} closeOnOverlayClick={false}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader m={"1"}>
              Purchase has been completed successfully
            </ModalHeader>
            <ModalCloseButton
              onClick={handleFinishProcess}
            />
            <Flex alignContent={"center"} justifyContent={"center"}>
              {showCircularBar ? (
                <CircularProgress
                  size={40}
                  isIndeterminate
                  color="secondary.500"
                  mt={10}
                />
              ) : null}
              {showSuccessBuyInformation ? (
                <ModalBody alignContent={"center"} justifyContent={"center"}>
                  <Text id="name" data-cy="name" mb="1rem">
                    {formInfo[0].firstName} {formInfo[0].lastName} has
                    succesfully purchased the following items:
                  </Text>
                  {shopingCartProduct.map((shopCartProduct) => (
                    <Text key={shopCartProduct.id} id={shopCartProduct.name}>
                      {shopCartProduct.amount} x {shopCartProduct.name}
                    </Text>
                  ))}
                  <Text mt="1rem">
                    The credit card used was:{" "}
                    <span id="creditCard" data-cy="creditCard" style={{ fontWeight: "bold" }}>
                      {formInfo[0].cardNumber}
                    </span>
                  </Text>
                  <Text></Text>
                  <Text id="totalPrice" data-cy="totalPrice" mt="1rem">
                    Monney spent ${totalPrice}
                  </Text>
                </ModalBody>
              ) : null}
            </Flex>
            <ModalFooter>
              {showSuccessBuyInformation ? (
                <Button
                  data-cy="thankYou" 
                  bg={"secondary.500"}
                  mr={3}
                  onClick={handleFinishProcess}
                >
                  Thank you
                </Button>
              ) : null}
            </ModalFooter>
          </ModalContent>
        </Modal>
      ) : null}
    </>
  );
};

export default SuccessBuy;
