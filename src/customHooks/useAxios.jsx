import { useState, useEffect, useContext } from 'react';
import { BASE_URL } from '../constants/constants';
import { UserContext } from '../context/userContext';

export const useAxios = (endpoint, initialState = {}, user, password) => {
    const [info, setInfo] = useState(initialState);
    const [fetching, setFetching] = useState(true);
    const [error, setError] = useState(false);

    const { login } = useContext(UserContext);

    const fetchData = async () => {
        try {
            const { data } = await axios.post(`${BASE_URL}/${endpoint}`, {
                user,
                password,
            });
            setInfo(data);
            setFetching(false);
            login(data.token);
        } catch (e) {
            setData(initialState);
            setFetching(false);
            setError(true);
        }
    };
    useEffect(() => {
        fetchData();
    }, [endpoint]);

    return [info, fetching, error];
};
