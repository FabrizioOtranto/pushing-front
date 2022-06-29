import { Button, FormControl, FormLabel, Input } from '@chakra-ui/react';
import React from 'react';

const TodoInput = ({ handlechange, text, handleSubmit }) => {
    return (
        <form onSubmit={handleSubmit}>
            <FormControl isRequired mb={5}>
                <FormLabel htmlFor="user" color="white">
                    Task
                </FormLabel>
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
                <Button type="submit" mt={4}>
                    Send
                </Button>
            </FormControl>
        </form>
    );
};

export default TodoInput;
