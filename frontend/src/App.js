import React from 'react';
import { BiCalendarPlus } from 'react-icons/bi';
import {
  ChakraProvider,
  Grid,
  Flex,
  Center,
  theme,
  Heading,
  Icon,
  useColorModeValue,
  Stack,
  Spacer,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import Header from './components/Header';
function App() {
  const bg = useColorModeValue('red.500', 'red.200');
  return (
    <ChakraProvider theme={theme}>
      <Flex p={3}>
        <Header />
        <Spacer />
        <ColorModeSwitcher justify="flex-end" />
      </Flex>
    </ChakraProvider>
  );
}

export default App;
