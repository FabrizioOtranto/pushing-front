import { useContext, useState } from 'react';
import axios from 'axios';
import { BASE_URL } from '../constants/constants';
import { UserContext } from '../context/userContext';
import { useNavigate } from 'react-router-dom';

const usePost = () => {
    const [data, setData] = useState({});
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const { login } = useContext(UserContext);
    const navigate = useNavigate();

    const execute = async ({ endpoint, postData }) => {
        try {
            setLoading(true);
            const { data } = await axios.post(`${BASE_URL}/${endpoint}`, {
                ...postData,
            });
            setData(data);
            login(data);
            setLoading(false);
            navigate('/home');
        } catch (error) {
            setError(error.response.data);
            setLoading(false);
        }
    };

    return {
        execute,
        data,
        loading,
        error,
    };
};

export default usePost;
