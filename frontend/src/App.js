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
  const [search, setSearch] = useState('');

  const fetchAppointment = useCallback(() => {
    fetch('./data.json')
      .then(res => res.json())
      .then(data => setAppointments(data));
  }, []);
  useEffect(() => {
    fetchAppointment();
  }, [fetchAppointment]);
  const filteredAppointments = appointments.filter(
    appointment =>
      appointment.petName.toLowerCase().includes(search.toLowerCase()) ||
      appointment.ownerName.toLowerCase().includes(search.toLowerCase()) ||
      appointment.aptNotes.toLowerCase().includes(search.toLowerCase()) ||
      appointment.aptDate.toLowerCase().includes(search.toLowerCase())
  );
  return (
    <ChakraProvider theme={theme}>
      <Flex p={3}>
        <Header />
        <Spacer />
        <ColorModeSwitcher justify="flex-end" />
      </Flex>
      <AddAppointment />
      <Search search={search} setSearch={setSearch} />
      {filteredAppointments.map(appointment => (
        <div key={appointment.id}>
          <AppointmentInfo
            appointment={appointment}
            onDelete={() => {
              const newAppointments = appointments.filter(
                a => a.id !== appointment.id
              );
              setAppointments(newAppointments);
            }}
          />
          <Divider />
        </div>
      ))}
    </ChakraProvider>
  );
}

export default App;
