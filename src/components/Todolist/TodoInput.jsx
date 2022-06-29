import { Button, FormControl, FormLabel, Input, Flex } from '@chakra-ui/react';
import React from 'react';

const TodoInput = ({ handlechange, text, handleSubmit }) => {
    return (
        <form onSubmit={handleSubmit}>
            <FormControl isRequired mb={5} marginLeft={"15%"} w='70%'>
                <FormLabel htmlFor="user" color="white">
                    Task
                </FormLabel>
                <Flex  w="100%">
                <Input
                    name="user"
                    cy-get="user"
                    id="task"
                    type="text"
                    color="white"
                    bg="primary.300"
                    focusBorderColor="none"
                    onChange={handlechange}
                    value={text}
                />
                <Button type="submit">
                    Send
                </Button>
                </Flex>
            </FormControl>

        </form>
    );
};

export default TodoInput;
