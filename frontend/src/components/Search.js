import { BiSearch } from 'react-icons/bi';
import { IoIosArrowDown } from 'react-icons/io';

import {
  InputGroup,
  Input,
  InputLeftElement,
  Button,
  Divider,
  Menu,
  MenuButton,
  MenuList,
  MenuOptionGroup,
  MenuItemOption,
  MenuDivider,
} from '@chakra-ui/react';
import { BsCheck } from 'react-icons/bs';
const DropDown = () => {
  return (
    <>
      <Menu closeOnSelect={false}>
        <MenuButton as={Button} colorScheme="teal">
          Sort by
        </MenuButton>
        <MenuList minWidth="240px">
          <MenuOptionGroup defaultValue="asc" title="Order" type="radio">
            <MenuItemOption value="asc">Ascending</MenuItemOption>
            <MenuItemOption value="desc">Descending</MenuItemOption>
          </MenuOptionGroup>
          <MenuDivider />
          <MenuOptionGroup
            title="Appointment"
            type="radio"
            defaultValue="petOwner"
          >
            <MenuItemOption value="petOwner">Pet owner</MenuItemOption>
            <MenuItemOption value="petName">Pet name</MenuItemOption>
            <MenuItemOption value="date">Date</MenuItemOption>
          </MenuOptionGroup>
        </MenuList>
      </Menu>
    </>
  );
};
const Search = () => {
  return (
    <>
      <InputGroup>
        <InputLeftElement
          children={<BiSearch color="gray.300" />}
          pointerEvents="none"
        />
        <Input type="text" placeholder="Search" />
        <DropDown />
      </InputGroup>
    </>
  );
};
export default Search;
