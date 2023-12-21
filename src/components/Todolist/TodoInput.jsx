import { Button, FormControl, FormLabel, Input, Flex, Text } from '@chakra-ui/react';
import React from "react";


const TodoInput = ({ handlechange, text, sendTask, sendTaskOnInput, isButtonDisabled, errorMessage }) => {
    return (

        <FormControl isRequired mb={5} marginLeft={"15%"} w='70%'>
            <FormLabel htmlFor="user" color="white">
                Task
            </FormLabel>
            <Flex w="100%">
                <Input
                    name="task"
                    data-cy="task"
                    id="task"
                    type="text"
                    color="white"
                    bg="primary.300"
                    focusBorderColor="none"
                    onChange={handlechange}
                    onKeyDown={() => sendTaskOnInput(event)}
                    value={text}
                />
                <Button
                    type="submit"
                    id="sendTask"
                    data-cy="sendTask"
                    onClick={() => sendTask()}
                    disabled={isButtonDisabled}>
                    Send
                </Button>
            </Flex>
            {errorMessage ? (
                <Text id="errorMessage" bg={"black"} fontSize={20} color={'red'} data-cy='errorMessage'>
                    {errorMessage}
                </Text>
            ) : null}
        </FormControl>


    );
};

export default TodoInput;
