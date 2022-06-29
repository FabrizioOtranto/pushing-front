import React, { useContext, useState } from 'react';
import { Navigate } from 'react-router-dom';

import { UserContext } from '../context/userContext';

import Navbar from './Navbar';
import '../App.css';
import { Heading, Flex, Box, Input, List, ListItem, Button, FormControl, Checkbox } from '@chakra-ui/react';



const ToDoList = () => {
    const { token } = useContext(UserContext);
    const [arrayTask, setArrayTask] = useState([{ name: "", id: 0, completed: false }])
    const [task, setTask] = useState({ name: "", id: 0, completed: false })

    if (!token) {
        return <Navigate to="/" replace={true} />;
    }

    const handlechange = (e) => {
        let updatedValue = e.target.value;
        setTask([updatedValue, Math.floor(Math.random() * 100), true])
    }

    const handleClick = () => {
        setArrayTask(oldArray => ([
            ...oldArray,
            task
        ]));
        console.log(task)
    }


    return (
        <>
            <Navbar />
            <Heading my={3} color="secondary.500">
                Todo List
            </Heading>
            <Flex justify="center" m='20'>
                <Box flex='0.5' p='undefined' bg='gray'>
                    <FormControl>
                        <Flex justify="space-between" w="100%" p={2} align="center">

                            <Input
                                name="user"
                                cy-get="user"
                                id="task"
                                type="text"
                                color="white"
                                bg="primary.300"
                                focusBorderColor="none"
                                onChange={handlechange}
                                value={task.name}
                            />
                            <Button
                                type='submit'
                                onClick={handleClick}
                            >Send Task
                            </Button>
                        </Flex>
                        <List>
                            {arrayTask.map((elem) => (
                                <ListItem
                                    key={elem.id}
                                    fontSize={'2em'}
                                >
                                    <Flex w="20%" p={3} align="center">
                                        <Checkbox
                                            marginRight={"15px"}>
                                        </Checkbox>
                                        {elem.name} 
                                    </Flex>
                                </ListItem>
                            ))
                            }

                        </List>
                        <Flex direction="column">
                            <Flex justify="space-between" w="100%" p={3} align="center">
                                <Button
                                    _hover={{ bg: 'gray.500', color: 'gray.500' }}
                                    color="secondary.500"
                                    bg="gray"
                                >
                                    All
                                </Button>
                                <Button
                                    _hover={{ bg: 'gray.500', color: 'gray.500' }}
                                    color="secondary.500"
                                    bg="gray"
                                >
                                    Active
                                </Button>
                                <Button
                                    _hover={{ bg: 'gray.500', color: 'gray.500' }}
                                    color="secondary.500"
                                    bg="gray"
                                >
                                    Completed
                                </Button>
                            </Flex>
                        </Flex>
                    </FormControl>
                </Box>
            </Flex>


        </>


    );
};

export default ToDoList;
