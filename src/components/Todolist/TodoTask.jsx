import {
    Box,
    Button,
    Flex,
    List,
    ListItem,
    Text,
    Skeleton
} from '@chakra-ui/react';
import React from "react";

const TodoTask = ({
    handleCompleted,
    handleDelete,
    handleShowCompleted,
    handleShowActive,
    showAllTasks,
    showCompletedTasks,
    showActiveTasks,
    handleShowAll,
    handleRemoveAll,
    tasks,
    deleteTask,
    preLoading,
    loading
}) => {

    return (

        <>
            <Skeleton isLoaded={!preLoading}>
                <List marginLeft={"160"} w='70%'>
                    {showAllTasks ? (
                        tasks?.map((elem) => (
                            <Skeleton isLoaded={!loading}>
                                <ListItem key={elem._id} fontSize={'2em'}>
                                    <Flex w="100%" p={2} align="center"
                                        bg="secondary.300">
                                        <Text
                                            onClick={() => handleCompleted(elem._id)}
                                            w="100%"
                                            style={{
                                                textDecoration: elem.completed
                                                    ? 'line-through'
                                                    : 'none',
                                            }}
                                            id={elem._id}
                                        >
                                            {elem.name}
                                        </Text>
                                        <Button
                                            bg={"white"}
                                            onClick={() => deleteTask(elem._id)}>
                                            Delete
                                        </Button>

                                    </Flex>

                                </ListItem>
                            </Skeleton>

                        ))
                    ) : null
                    }

                    {showCompletedTasks ? (
                        tasks?.map((elem) => (
                            <Skeleton isLoaded={!loading}>
                                <ListItem key={elem._id} fontSize={'2em'}>
                                    <Flex w="100%" p={2} align="center"
                                        bg="secondary.300">
                                        <Text
                                            onClick={() => handleCompleted(elem._id)}
                                            w="100%"
                                            style={{
                                                textDecoration: elem.completed
                                                    ? 'line-through'
                                                    : 'none',
                                            }}
                                            id={elem._id}
                                        >
                                            {elem.name}
                                        </Text>
                                        <Button
                                            bg={"white"}
                                            onClick={() => handleDelete(elem._id)}>
                                            Delete
                                        </Button>
                                    </Flex>
                                </ListItem>
                            </Skeleton>
                        ))
                    ) : null
                    }
                    {showActiveTasks ? (
                        tasks?.map((elem) => (
                            <Skeleton isLoaded={!loading}>
                                <ListItem key={elem._id} fontSize={'2em'}>
                                    <Flex w="100%" p={2} align="center"
                                        bg="secondary.300">
                                        <Text
                                            onClick={() => handleCompleted(elem._id)}
                                            w="100%"
                                            id={elem._id}
                                        >
                                            {elem.name}
                                        </Text>
                                        <Button
                                            bg={"white"}
                                            onClick={() => deleteTask(elem._id)}>
                                            Delete
                                        </Button>
                                    </Flex>
                                </ListItem>
                            </Skeleton>

                        ))
                    ) : null
                    }
                    <Box flex="0.5" p="undefined" bg="gray" w="100%">
                        <Flex direction="column">
                            <Flex justify="space-between" w="100%" p={3} align="center">
                                <Button
                                    onClick={handleShowAll}
                                    _hover={{
                                        bg: 'secondary.500',
                                        color: 'black.500',
                                    }}
                                    style={{
                                        backgroundColor: showAllTasks
                                            ? '#6565eb'
                                            : 'gray',
                                    }}
                                    color="secondary.500"
                                    bg="gray"
                                    id="all"
                                    data-cy="all"
                                >
                                    All
                                </Button>
                                <Button
                                    onClick={handleShowCompleted}
                                    _hover={{
                                        bg: 'secondary.500',
                                        color: 'black.500',
                                    }}
                                    style={{
                                        backgroundColor: showCompletedTasks
                                            ? '#6565eb'
                                            : 'gray',
                                    }}
                                    color="secondary.500"
                                    bg="gray"
                                    id="completed"
                                    data-cy='completed'
                                >
                                    Completed
                                </Button>
                                <Button
                                    onClick={handleShowActive}
                                    _hover={{
                                        bg: 'secondary.500',
                                        color: 'black.500',
                                    }}
                                    style={{
                                        backgroundColor: showActiveTasks
                                            ? '#6565eb'
                                            : 'gray',
                                    }}
                                    color="secondary.500"
                                    bg="gray"
                                    id="active"
                                    data-cy='active'
                                >
                                    Active
                                </Button>
                            </Flex>
                        </Flex>
                    </Box>
                    <Box flex="0.5" p="undefined" bg="primary.500" w="100%">
                        <Flex w="100%" p={2} justifyContent={'center'}>
                            <Button
                                onClick={handleRemoveAll}
                                _hover={{
                                    bg: 'gray',
                                    color: 'black.500',
                                }}
                                flex="0.5" p="undefined" bg="gray" w="100%"
                                color="secondary.500"
                                id="removeAll"
                                data-cy="removeAll"
                            >
                                Remove all
                            </Button>
                        </Flex>
                    </Box>
                </List >
            </Skeleton>

        </>

    );
};

export default TodoTask;
