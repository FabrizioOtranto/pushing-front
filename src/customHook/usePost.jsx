import { useContext, useState } from 'react';
import axios from 'axios';
import { BASE_URL } from '../constants/constants';
import { UserContext } from '../context/userContext';
import { useNavigate } from 'react-router-dom';

const usePost = () => {
    const [data, setData] = useState({});
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const { login } = useContext(UserContext);
    const navigate = useNavigate();

    const execute = async ({ endpoint, postData }) => {
        setLoading(true);
        return axios
            .post(`${BASE_URL}/${endpoint}`, { ...postData })
            .then((response) => {
                setData(response.data);
                login(response.data);
            })
            .catch((error) => {
                setError(true);
                console.log('Error: ', error);
            })
            .finally(() => {
                setLoading(false);
                navigate('/home');
            });
    };

    return {
        execute,
        data,
        loading,
        error,
    };
};

export default usePost;
