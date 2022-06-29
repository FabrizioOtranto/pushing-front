import { Heading } from '@chakra-ui/react';
import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import '../App.css';
import { UserContext } from '../context/userContext';
import Navbar from './Navbar';

import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

import { Box, Text, ListItem, List, Flex } from '@chakra-ui/react';
import { useState } from "react";

const initialTasks = [
    {
        id: "1",
        text: "Prender el horno",
    },
    {
        id: "2",
        text: "Agregar salsa de tomate y queso",
    },
    {
        id: "3",
        text: "Meter las pizzas en el horno",
    },
    {
        id: "4",
        text: "Hacer la masa",
    },
    {
        id: "5",
        text: "Estirar la masa",
    },
];

const reorder = (list, startIndex, endIndex) => {
    const result = [...list];
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result;
};

const DragAndDrop = () => {
    const { token } = useContext(UserContext);
    const [tasks, setTasks] = useState(initialTasks);

    if (!token) {
        return <Navigate to="/" replace={true} />;
    }

    const sort = (result) => {
        const { source, destination } = result;
        if (!destination) {
            return;
        }
        if (
            source.index === destination.index &&
            source.droppableId === destination.droppableId
        ) {
            return;
        }

        setTasks((prevTasks) =>
            reorder(prevTasks, source.index, destination.index)
        );
    }

    return (
        <>
            <Navbar />
            <Heading my={3} color="secondary.500">
                Drag And Drop
            </Heading>
            <Flex align="center" justifyContent={"center"}>
                <DragDropContext
                    onDragEnd={sort}
                >
                    <Box className="container">
                        <Text
                            align="center"
                            justifyContent={"center"}
                            fontSize="30px"
                            fontWeight={"bolder"}>
                            Paso a paso para disfrutar de una buena pizza
                        </Text>
                        <Droppable droppableId="tasks">
                            {(droppableProvided) => (
                                <List
                                    {...droppableProvided.droppableProps}
                                    ref={droppableProvided.innerRef}
                                    marginTop={"3%"}
                                    fontSize={"3rem"}
                                >
                                    {tasks.map((task, index) => (
                                        <Draggable key={task.id} draggableId={task.id} index={index}>
                                            {(draggableProvided) => (
                                                <ListItem
                                                    {...draggableProvided.draggableProps}
                                                    ref={draggableProvided.innerRef}
                                                    {...draggableProvided.dragHandleProps}
                                                    color={"secondary.500"}
                                                    bg={"black.500"}
                                                    align="center"
                                                    margin={"0.5%"}
                                                    justifyContent={"center"}
                                                >
                                                    {task.text}
                                                </ListItem>
                                            )}
                                        </Draggable>
                                    ))}
                                    {droppableProvided.placeholder}
                                </List>
                            )}
                        </Droppable>
                    </Box>
                </DragDropContext>
            </Flex>
        </>
    );
};

export default DragAndDrop;
