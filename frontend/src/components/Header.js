import { Flex, Icon, Heading, useColorModeValue } from '@chakra-ui/react';
import { BiCalendarCheck } from 'react-icons/bi';
const Header = () => {
  const color = useColorModeValue('red.400', 'red.300');
  return (
    <>
      <Flex spacing={4} direction="row" justify="center" align="center">
        <Icon as={BiCalendarCheck} color={color} boxSize={9} />

        <Heading as="h3" size="xl" fontWeight="thin">
          Honest Appointment
        </Heading>
      </Flex>
    </>
  );
};
export default Header;
