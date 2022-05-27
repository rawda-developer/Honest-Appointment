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
  Divider,
  Spacer,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import Header from './components/Header';
import AddAppointment from './components/AddAppointment';
import AppointmentInfo from './components/AppointmentInfo';
import { useState, useEffect, useCallback } from 'react';
import Search from './components/Search';
function App() {
  const bg = useColorModeValue('red.500', 'red.200');
  const [appointments, setAppointments] = useState([]);

  const fetchAppointment = useCallback(() => {
    fetch('./data.json')
      .then(res => res.json())
      .then(data => setAppointments(data));
  }, []);
  useEffect(() => {
    fetchAppointment();
  }, [fetchAppointment]);

  return (
    <ChakraProvider theme={theme}>
      <Flex p={3}>
        <Header />
        <Spacer />
        <ColorModeSwitcher justify="flex-end" />
      </Flex>
      <AddAppointment />
      <Search />
      {appointments.map(appointment => (
        <div key={appointment.id}>
          <AppointmentInfo appointment={appointment} />
          <Divider />
        </div>
      ))}
    </ChakraProvider>
  );
}

export default App;
