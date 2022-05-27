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
const AddAppointment = () => {
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
            <Input placeholder="Owner Name" />
            <Input placeholder="Pet Name" />
            <DatePicker
              placeholder="Date picker placeholder"
              name="date"
              onChange={date => console.log(date)}
            />
            <Textarea placeholder="Appointment Notes..." />
            <Button colorScheme="teal">Submit</Button>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </>
  );
};
export default AddAppointment;
