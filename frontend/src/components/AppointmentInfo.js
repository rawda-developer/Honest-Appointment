import {
  Flex,
  Icon,
  Heading,
  useColorModeValue,
  IconButton,
  Spacer,
} from '@chakra-ui/react';
import { BsTrash } from 'react-icons/bs';

const AppointmentInfo = ({ appointment, onDelete }) => {
  const color = useColorModeValue('red.400', 'red.300');

  return (
    <>
      <Flex spacing={4} direction="column" justify="left" align="left" p={4}>
        <Flex direction="row">
          <IconButton
            icon={<BsTrash />}
            color={color}
            boxSize={8}
            onClick={onDelete}
          />

          <Heading as="h3" size="lg" fontWeight="thin" color="teal">
            {appointment.petName}
          </Heading>
        </Flex>
        <Spacer />
        <Heading as="h3" size="md" fontWeight="thin">
          {appointment.ownerName}
        </Heading>
        <Spacer />
        <Flex>
          <Heading as="h3" size="sm" fontWeight="thin">
            {appointment.aptNotes}
          </Heading>
          <Spacer />
          <Heading as="h3" size="sm" fontWeight="thin">
            {appointment.aptDate}
          </Heading>
        </Flex>
      </Flex>
    </>
  );
};
export default AppointmentInfo;
