import React, { useContext, useEffect, useState } from "react";
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
import axios from 'axios';
import {
    BASE_URL
} from "../../constants/constants";

const ToDoList = () => {
    const { token } = useContext(UserContext);
    const { userId } = useContext(UserContext);
    const [text, setText] = useState('');
    const [arrayTask, setArrayTask] = useState([]);
    const [completedArrayTasks, setCompletedArrayTasks] = useState([]);
    const [activeArrayTasks, setActiveArrayTasks] = useState([]);
    const [showActiveTasks, setShowActiveTasks] = useState(false)
    const [showCompletedTasks, setShowCompletedTasks] = useState(false)
    const [showAllTasks, setShowAllTasks] = useState(true)
    const [tasks, setTasks] = useState();
    const [preLoading, setPreLoading] = useState(true);
    const [loading, setLoading] = useState(true);
    const [showCircularBar, setShowCircularBar] = useState(false);
    const [isButtonDisabled, setDisabledButton] = useState(true);
    const [errorMessage, setErrorMessage] = useState('');
    const [showTasks, setShowTasks] = useState(true);

    if (!token) {
        return <Navigate to="/" replace={true} />;
    }
    const getTasks = () => {
        setLoading(true);

        fetch(
            `${BASE_URL}/tasks?userId=${userId}`,
            {
                method: "get",
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }
        )
            .then(async (res) => {
                try {
                    const data = (await res.json());

                    setTasks(data["tasks"]);
                    setLoading(false);
                    setPreLoading(false);
                } catch (e) {
                    console.log(e);
                }
            })
            .catch((res) => {
                console.log(res);
            });
    };

    const getTasksFiltered = (completedStatus) => {
        setLoading(true);

        fetch(
            `${BASE_URL}/tasks?userId=${userId}&completed=${completedStatus}`,
            {
                method: "get",
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }
        )
            .then(async (res) => {
                try {
                    const data = (await res.json());

                    setTasks(data["tasks"]);
                    setLoading(false);
                    setPreLoading(false);
                } catch (e) {
                    console.log(e);
                }
            })
            .catch((res) => {
                console.log(res);
            });
    };

    const getTask = async (id) => {
        setLoading(true);
        const res = await axios.get(`${BASE_URL}/task/${id}`,
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }
        );
        return res

    };

    const deleteTask = async (taskId) => {
        try {
            const res = await fetch(`${BASE_URL}/task/${taskId}`, {
                method: "delete",
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            setLoading(true)
            if (res.status === 202) {
                getTasks();
                setLoading(false)
            }
        } catch (e) {
            console.log(e);
        }
    };

    const deleteTasks = async () => {
        try {
            const res = await fetch(`${BASE_URL}/tasks?userId=${userId}`, {
                method: "delete",
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            if (res.status === 202) {
                getTasks();
                setErrorMessage('')
            }
        } catch (e) {
            console.log(e);
        }
    };

    const sendTask = async () => {
        setLoading(true);
        try {
            const res = await axios.post(`${BASE_URL}/save-task`, {
                name: text,
                completed: false,
                userId: userId
            }, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })

            if (res.status === 201) {
                getTasks()
                setText('')
                setDisabledButton(true)
                setErrorMessage('')
                setLoading(false)
            }
        } catch (e) {
            setErrorMessage(e.response.data)
            setLoading(false)
        }
    };

    const sendTaskOnInput = async (e) => {
        if (e.key === 'Enter' && text.length && text.length <= 30) {
            setLoading(true);
            try {
                const res = await axios.post(`${BASE_URL}/save-task`, {
                    name: text,
                    completed: false,
                    userId: userId
                }, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                })

                if (res.status === 201) {
                    getTasks()
                    setText('')
                    setDisabledButton(true)
                    setErrorMessage('')
                    setLoading(false)
                }
            } catch (e) {
                setErrorMessage(e.response.data)
                setLoading(false)
            }
        }
    };


    const handlechange = (e) => {
        if (e.target.value.length === 0) {
            setDisabledButton(true)
        }
        else if (e.target.value.length >= 31) {
            setDisabledButton(true)
            setErrorMessage('Task name cannot have more than 30 characters')
        } else {
            setDisabledButton(false)
            setErrorMessage('')
        }
        setText(e.target.value);
    };

    const handleCompleted = async (id) => {
        setLoading(true);
        getTask(id).then(async (res) => {

            if (res.data.task.completed === true) {
                try {
                    const res = await axios.patch(`${BASE_URL}/task/${id}`, {
                        completed: false,
                    }, {
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                    })

                    if (res.status === 202) {
                        if (showActiveTasks === true) {
                            getTasksFiltered(false)
                        } else if (showCompletedTasks === true) {
                            getTasksFiltered(true)
                        } else {
                            getTasks();
                        }
                    }
                } catch (e) {
                    console.log(e);
                }
            } else {
                try {
                    const res = await axios.patch(`${BASE_URL}/task/${id}`, {
                        completed: true,
                    }, {
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                    })

                    if (res.status === 202) {
                        getTasks();
                    }
                } catch (e) {
                    console.log(e);
                }
            }
        })

    };

    const handleShowCompleted = () => {
        getTasksFiltered(true)
        setShowActiveTasks(false)
        setShowCompletedTasks(true)
        setShowAllTasks(false)

    };

    const handleShowActive = () => {
        getTasksFiltered(false)
        setShowActiveTasks(true)
        setShowCompletedTasks(false)
        setShowAllTasks(false)
    };

    const handleShowAll = () => {
        getTasks()
        setShowActiveTasks(false)
        setShowCompletedTasks(false)
        setShowAllTasks(true)
    };

    const handleRemoveAll = () => {
        deleteTasks()
    }

    useEffect(getTasks, [setTasks, setLoading]);

    return (
        <>
            <Helmet>
                <title>TodoList</title>
            </Helmet>
            <Navbar />
            <Heading my={3} color="secondary.500" id="title" data-cy='title'>
                Todo List
            </Heading>
            <Flex justify="center" direction="column" m="20">
                <TodoInput
                    handlechange={handlechange}
                    text={text}
                    sendTask={sendTask}
                    sendTaskOnInput={sendTaskOnInput}
                    getTasks={getTasks}
                    isButtonDisabled={isButtonDisabled}
                    errorMessage={errorMessage}
                />
                <TodoTask
                    arrayTask={arrayTask}
                    completedArrayTasks={completedArrayTasks}
                    activeArrayTasks={activeArrayTasks}
                    handleCompleted={handleCompleted}
                    handleShowCompleted={handleShowCompleted}
                    handleShowActive={handleShowActive}
                    handleShowAll={handleShowAll}
                    showActiveTasks={showActiveTasks}
                    showAllTasks={showAllTasks}
                    showCompletedTasks={showCompletedTasks}
                    handleRemoveAll={handleRemoveAll}
                    tasks={tasks}
                    deleteTask={deleteTask}
                    preLoading={preLoading}
                    loading={loading}
                />
            </Flex>
        </>
    );
};

export default ToDoList;
