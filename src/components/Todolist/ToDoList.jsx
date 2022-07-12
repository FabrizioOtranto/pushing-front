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
import { Helmet } from "react-helmet";

const ToDoList = () => {
    const { token } = useContext(UserContext);
    const [text, setText] = useState('');
    const [arrayTask, setArrayTask] = useState([]);
    const [completedArrayTasks, setCompletedArrayTasks] = useState([]);
    const [activeArrayTasks, setActiveArrayTasks] = useState([]);
    const [showActiveTasks, setShowActiveTasks] = useState(false)
    const [showCompletedTasks, setShowCompletedTasks] = useState(false)
    const [showAllTasks, setShowAllTasks] = useState(true)

    if (!token) {
        return <Navigate to="/" replace={true} />;
    }

    const handlechange = (e) => {
        setText(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        var id = Math.floor(Math.random() * 10000)
        setArrayTask([
            ...arrayTask,
            {
                name: text,
                id: id,
                completed: false,
            },
        ]);
        setActiveArrayTasks([
            ...activeArrayTasks,
            {
                name: text,
                id: id,
                completed: false,
            },
        ]);
        setText("");

    };

    const handleCompleted = (id) => {
        const newArray = arrayTask.map((task) =>
            task.id === id ? { ...task, completed: !task.completed } : task
        );
        setArrayTask(newArray);
        setCompletedArrayTasks(newArray.filter((task) => task.completed === true))
        setActiveArrayTasks(newArray.filter((task) => task.completed === false))
    };

    const handleDelete = (id) => {
        const newArray = arrayTask.filter((task) => task.id !== id)
        setArrayTask(newArray);
        setCompletedArrayTasks(newArray.filter((task) => task.completed === true))
        setActiveArrayTasks(newArray.filter((task) => task.completed === false))

    };

    const handleShowCompleted = () => {
        setCompletedArrayTasks(arrayTask.filter((task) => task.completed === true))
        setShowActiveTasks(false)
        setShowCompletedTasks(true)
        setShowAllTasks(false)
    };

    const handleShowActive = () => {
        setActiveArrayTasks(arrayTask.filter((task) => task.completed === false))
        setShowActiveTasks(true)
        setShowCompletedTasks(false)
        setShowAllTasks(false)
    };

    const handleShowAll = () => {
        setShowActiveTasks(false)
        setShowCompletedTasks(false)
        setShowAllTasks(true)
    };

    const handleRemoveAll = () => {
        setActiveArrayTasks([])
        setCompletedArrayTasks([])
        setArrayTask([])
    }

    return (
        <>
            <Helmet>
                <title>TodoList</title>
            </Helmet>
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
                    completedArrayTasks={completedArrayTasks}
                    activeArrayTasks={activeArrayTasks}
                    handleCompleted={handleCompleted}
                    handleDelete={handleDelete}
                    handleShowCompleted={handleShowCompleted}
                    handleShowActive={handleShowActive}
                    handleShowAll={handleShowAll}
                    showActiveTasks={showActiveTasks}
                    showAllTasks={showAllTasks}
                    showCompletedTasks={showCompletedTasks}
                    handleRemoveAll={handleRemoveAll}
                />
            </Flex>
        </>
    );
};

export default ToDoList;
