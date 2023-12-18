import React, { useContext, useState } from 'react';
import { UserContext } from '../../context/userContext';
import { Navigate } from 'react-router-dom';
import {
  Text,
  Heading,
  Input,
  Button
} from '@chakra-ui/react';

const HiddenSection = ({ showHiddenSection }) => {

  const { token } = useContext(UserContext);
  const [text, setText] = useState('')
  const [showMessage, setShowMessage] = useState(false)
  const [message, setMessage] = useState('')

  if (!token) {
    return <Navigate to="/" replace={true} />;
  }

  const handleChange = (e) => {
    setText(e.target.value)
  }

  const handleClick = (e) => {
    setShowMessage(true)
    setMessage(text)
  }
  return (
    <>
      {showHiddenSection ? (
        <>
          <Heading color="secondary.500" my={3} id="title">
            Hidden Text
          </Heading>
          <form type='submit'>
            <Text
              name="text"
              data-cy="text"
              id="text"
              type="text"
              style={{
                display: 'block'
              }}
              fontSize="2em"
              m={"1em"}
              color="white"
            >
              {showMessage ? message : "click the hidden button and see what happens"}
            </Text>

            <Input
              name="input"
              data-cy="input"
              id="input"
              type="text"
              style={{
                display: 'block'
              }}
              color="white"
              bg="primary.300"
              focusBorderColor="none"
              onChange={handleChange}
            />
            <Button
              _hover={{ bg: 'secondary.500', color: 'black.500' }}
              style={{
                display: 'none'
              }}
              bg="black.500"
              color="white"
              id="btnnHidden"
              name="btnnHidden"
              onClick={handleClick}
              m="2em"
              align="center"
            >
              Click me
            </Button>
          </form>
        </>
      ) : null
      }
    </>
  );
};

export default HiddenSection;
