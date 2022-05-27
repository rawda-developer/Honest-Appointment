import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Input,
  Button,
  Textarea,
} from '@chakra-ui/react';
import { DatePicker } from 'chakra-ui-date-input';
import { useState } from 'react';
const AddAppointment = ({ addAppointment, lastId }) => {
  const clearData = {
    petName: '',
    ownerName: '',
    aptNotes: '',
    aptDate: '',
  };
  const [appointment, setAppointment] = useState(clearData);
  return (
    <>
      <Accordion allowToggle>
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Button
                flex="1"
                textAlign="left"
                colorScheme="teal"
                variant="solid"
              >
                Add Appointment
              </Button>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <Input
              placeholder="Owner Name"
              value={appointment.ownerName}
              onChange={event =>
                setAppointment({
                  ...appointment,
                  ownerName: event.target.value,
                })
              }
            />
            <Input
              placeholder="Pet Name"
              value={appointment.petName}
              onChange={event =>
                setAppointment({ ...appointment, petName: event.target.value })
              }
            />
            <DatePicker
              placeholder="Select Date"
              name="date"
              onChange={date =>
                setAppointment({ ...appointment, aptDate: date })
              }
              value={appointment.aptDate}
            />
            <Textarea
              placeholder="Appointment Notes..."
              value={appointment.aptNotes}
              onChange={event =>
                setAppointment({ ...appointment, aptNotes: event.target.value })
              }
            />
            <Button
              onClick={() => {
                const newAppointment = {
                  ...appointment,
                  id: lastId + 1,
                };
                addAppointment(newAppointment);
                setAppointment(clearData);
              }}
              colorScheme="teal"
            >
              Submit
            </Button>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </>
  );
};
export default AddAppointment;
