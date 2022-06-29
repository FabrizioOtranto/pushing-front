import {
    Box,
    Button,
    Checkbox,
    Flex,
    List,
    ListItem,
    Text,
} from '@chakra-ui/react';
import React from 'react';

const TodoTask = ({
    arrayTask,
    handleCompleted,
    handleDelete,
    showCompleted,
    showActive,
}) => {
    return (
        <List marginLeft={"15%"} w='100%'>
            {arrayTask?.map((elem) => (
                <ListItem key={elem.id} fontSize={'2em'}>
                    <Flex w="70%" p={2} align="center"
                    bg="secondary.300">
                        <Text
                            onClick={() => handleCompleted(elem.id)}
                            w="100%"
                            style={{
                                textDecoration: elem.completed
                                    ? 'line-through'
                                    : 'none',
                            }}
                        >
                            {elem.name}
                        </Text>
                        <Button 
                        bg={"white"}
                        onClick={() => handleDelete(elem.id)}>
                            Delete
                        </Button>

                    </Flex>
                </ListItem>
            ))}
            <Box flex="0.5" p="undefined" bg="gray" w="70%" >
                <Flex direction="column">
                    <Flex justify="space-between" w="100%" p={3} align="center">
                        <Button
                            _hover={{
                                bg: 'secondary.500',
                                color: 'gray.500',
                            }}
                            color="secondary.500"
                            bg="gray"
                        >
                            All
                        </Button>
                        <Button
                            onClick={showCompleted}
                            _hover={{
                                bg: 'secondary.500',
                                color: 'gray.500',
                            }}
                            color="secondary.500"
                            bg="gray"
                        >
                            Completed
                        </Button>
                        <Button
                            onClick={showActive}
                            _hover={{
                                bg: 'secondary.500',
                                color: 'gray.500',
                            }}
                            color="secondary.500"
                            bg="gray"
                        >
                            Active
                        </Button>
                    </Flex>
                </Flex>
            </Box>
        </List>
    );
};

export default TodoTask;
