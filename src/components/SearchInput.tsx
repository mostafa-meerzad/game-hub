import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";

interface Props {
    onSearch: (searchText: string)=> void;
}

const SearchInput = ({onSearch}: Props) => {
  const searchRef = useRef<HTMLInputElement>(null);
  return (
    <form
      onSubmit={(even) => {
        even.preventDefault();
        if (searchRef.current) onSearch(searchRef.current.value);
      }}
    >
      <InputGroup>
        <InputLeftElement children={<BsSearch />} />

        <Input
          borderRadius={20}
          placeholder="Search Games"
          variant={"filled"}
          ref={searchRef}
        />
      </InputGroup>
    </form>
  );
};

export default SearchInput;
