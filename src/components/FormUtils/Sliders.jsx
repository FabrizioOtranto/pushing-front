import React, { useContext, useState } from 'react';
import { UserContext } from '../../context/userContext';
import { Navigate } from 'react-router-dom';
import {
  Heading,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  SliderMark,
  RangeSlider,
  RangeSliderTrack,
  RangeSliderFilledTrack,
  RangeSliderThumb,
  Box
} from '@chakra-ui/react';

const Sliders = ({ sliderValue, labelStyles, showSliders, setSliderValue }) => {

  const { token } = useContext(UserContext);

  if (!token) {
    return <Navigate to="/" replace={true} />;
  }
  return (
    <>
      {showSliders ? (
        <>
          <Heading color="secondary.500" my={3}>
            Slider
          </Heading><Box pt={6} pb={2}>
            <Slider aria-label='slider-ex-6' onChange={(val) => setSliderValue(val)}>
              <SliderMark value={25} {...labelStyles}>
                25%
              </SliderMark>
              <SliderMark value={50} {...labelStyles}>
                50%
              </SliderMark>
              <SliderMark value={75} {...labelStyles}>
                75%
              </SliderMark>
              <SliderMark
                value={sliderValue}
                textAlign='center'
                bg='blue.500'
                color='white'
                mt='-10'
                ml='-5'
                w='12'
              >
                {sliderValue}%
              </SliderMark>
              <SliderTrack>
                <SliderFilledTrack />
              </SliderTrack>
              <SliderThumb />
            </Slider>

          </Box><RangeSlider aria-label={['min', 'max']} defaultValue={[10, 30]} step={5} m={10}>
            <RangeSliderTrack>
              <RangeSliderFilledTrack />
            </RangeSliderTrack>
            <RangeSliderThumb index={0} />
            <RangeSliderThumb index={1} />
          </RangeSlider></>
      ) : null
      }
    </>
  );
};

export default Sliders;
