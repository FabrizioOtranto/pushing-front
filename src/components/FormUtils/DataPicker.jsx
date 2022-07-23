import React, { useContext} from 'react';
import { UserContext } from '../../context/userContext';
import { Navigate } from 'react-router-dom';
import { Heading } from '@chakra-ui/react';
import 'react-datepicker/dist/react-datepicker.css'
import DatePicker from "react-datepicker";

const DataPicker = ({ startDate, showDataPicker, setStartDate }) => {
    const { token } = useContext(UserContext);

    if (!token) {
        return <Navigate to="/" replace={true} />;
    }
    return (
        <>
            {showDataPicker ? (
            <>
            <Heading color="secondary.500" my={3} id="title">
                    Data Picker
                </Heading>
                <DatePicker id="datePicker" selected={startDate} onChange={(date) => setStartDate(date)} /></>
            )
                : null
                }
        </>
    );
};

export default DataPicker;