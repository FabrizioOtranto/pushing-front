import { UserContext } from '../../context/userContext';
import Navbar from '../Navbar';

import {
  Heading,
  SimpleGrid,
  Box,
  Text
} from '@chakra-ui/react';
import { useState, useContext } from "react";
import 'react-datepicker/dist/react-datepicker.css'
import Sliders from './Sliders';
import DataPicker from './DataPicker';

const FormUtils = () => {
  const { token } = useContext(UserContext);
  const [startDate, setStartDate] = useState(new Date());
  const [sliderValue, setSliderValue] = useState(50)
  const [showDataPicker, setShowDataPicker] = useState(false)
  const [showSliders, setShowSliders] = useState(false)

  const labelStyles = {
    mt: '2',
    ml: '-2.5',
    fontSize: 'sm',
  }


  if (!token) {
    return <Navigate to="/" replace={true} />;
  }

  const handleShowdataPicker = () => {
    setShowDataPicker(true)
    setShowSliders(false)
  }

  const handleShowSlider = () => {
    setShowSliders(true)
    setShowDataPicker(false)
  }
  return (
    <>
      <Navbar />
      <Heading my={3} color="secondary.500">
        Form Utils
      </Heading>
      <SimpleGrid columns={[2, null, 2]} spacing="40px" m={20}>
        <Box bg="black.500" height="80px" >
          <Text
            align="center"
            fontSize={'1.5em'}
            m={6}
            color={'secondary.500'}
            id={'showDatePicker'}
            onClick={handleShowdataPicker}
          >
            DataPicker
          </Text>
        </Box>
        <Box bg="black.500" height="80px">
          <Text
            align="center"
            fontSize={'1.5em'}
            m={6}
            color={'secondary.500'}
            id={'showSlider'}
            onClick={handleShowSlider}
          >
            Sliders
          </Text>
        </Box>
      </SimpleGrid>
      <DataPicker
        startDate={startDate}
        showDataPicker={showDataPicker}
        setStartDate={setStartDate}
      ></DataPicker>
      <Sliders
        labelStyles={labelStyles}
        sliderValue={sliderValue}
        showSliders={showSliders}
        setSliderValue={setSliderValue}
      ></Sliders>
    </>
  );
};
export default FormUtils;