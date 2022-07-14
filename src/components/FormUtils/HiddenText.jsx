import React, { useContext, useState } from 'react';
import { UserContext } from '../../context/userContext';
import { Navigate } from 'react-router-dom';
import {
  Text,
  Heading,
  Input
} from '@chakra-ui/react';

const HiddenText = ({showHiddenText,  }) => {

  const { token } = useContext(UserContext);

  if (!token) {
    return <Navigate to="/" replace={true} />;
  }
  return (
    <>
      {showHiddenText ? (
        <>
          <Heading color="secondary.500" my={3}>
            Hidden Text
          </Heading>
          <Text
            name="inputHitextHiddendden"
            cy-get="textHidden"
            id="textHidden"
            type="text"
            style={{
              display: 'none'
            }}
            color="white"
            bg="primary.300"
            focusBorderColor="none" 
            >
              This is text will be hidden, use invoke to make it visible
            </Text>

        </>
      ) : null
      }
    </>
  );
};

export default HiddenText;
