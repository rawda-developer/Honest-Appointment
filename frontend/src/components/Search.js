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
const DropDown = ({ sortBy, setSortBy, order, setOrder }) => {
  return (
    <>
      <Menu closeOnSelect={false}>
        <MenuButton as={Button} colorScheme="teal">
          Sort by
        </MenuButton>
        <MenuList minWidth="240px">
          <MenuOptionGroup defaultValue="asc" title="Order" type="radio">
            <MenuItemOption value="asc" onClick={() => setOrder('asc')}>
              Ascending
            </MenuItemOption>
            <MenuItemOption value="desc" onClick={() => setOrder('desc')}>
              Descending
            </MenuItemOption>
          </MenuOptionGroup>
          <MenuDivider />
          <MenuOptionGroup
            title="Appointment"
            type="radio"
            defaultValue="petOwner"
          >
            <MenuItemOption
              value="petOwner"
              onClick={() => setSortBy('petOwner')}
            >
              Pet owner
            </MenuItemOption>
            <MenuItemOption
              value="petName"
              onClick={() => setSortBy('petName')}
            >
              Pet name
            </MenuItemOption>
            <MenuItemOption value="date" onClick={() => setSortBy('aptDate')}>
              Date
            </MenuItemOption>
          </MenuOptionGroup>
        </MenuList>
      </Menu>
    </>
  );
};
const Search = ({ search, setSearch, sortBy, setSortBy, order, setOrder }) => {
  return (
    <>
      <InputGroup>
        <InputLeftElement
          children={<BiSearch color="gray.300" />}
          pointerEvents="none"
        />
        <Input
          type="text"
          placeholder="Search"
          value={search}
          onChange={event => setSearch(event.target.value)}
        />
        <DropDown
          sortBy={sortBy}
          setSortBy={setSortBy}
          order={order}
          setOrder={setOrder}
        />
      </InputGroup>
    </>
  );
};
export default Search;
