import React, { useContext, useState } from 'react';
import { Navigate } from 'react-router-dom';

import '../../App.css';
import {
    Heading,
    Flex,
} from '@chakra-ui/react';
import { UserContext } from '../../context/userContext';
import Navbar from '../Navbar';
import TodoInput from './TodoInput';
import TodoTask from './TodoTask';

const ToDoList = () => {
    const { token } = useContext(UserContext);
    const [text, setText] = useState('');
    const [arrayTask, setArrayTask] = useState([]);

    if (!token) {
        return <Navigate to="/" replace={true} />;
    }

    const handlechange = (e) => {
        setText(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setArrayTask([
            ...arrayTask,
            {
                name: text,
                id: Math.floor(Math.random() * 10000),
                completed: false,
            },
        ]);
        setText("");
        
    };

    const handleCompleted = (id) => {
        const newArray = arrayTask.map((task) =>
            task.id === id ? { ...task, completed: !task.completed } : task
        );

        //console.log(newArray);

        setArrayTask(newArray);
    };

    const handleDelete = (id) => {
        setArrayTask(arrayTask.filter((task) => task.id !== id));
    };

    const showCompleted = () => {
        setArrayTask((prev) => prev.filter((task) => task.completed === true));
    };

    const showActive = () => {
        setArrayTask((prev) => prev.filter((task) => task.completed === false));
    };

    return (
        <>
            <Navbar />
            <Heading my={3} color="secondary.500">
                Todo List
            </Heading>
            <Flex justify="center" direction="column" m="20">
                <TodoInput
                    handlechange={handlechange}
                    text={text}
                    handleSubmit={handleSubmit}
                />
                <TodoTask
                    arrayTask={arrayTask}
                    handleCompleted={handleCompleted}
                    handleDelete={handleDelete}
                    showCompleted={showCompleted}
                    showActive={showActive}
                />
            </Flex>
        </>
    );
};

export default ToDoList;
