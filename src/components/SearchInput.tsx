import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";
import useQueryStore from "../store";
import { useNavigate } from "react-router-dom";

const SearchInput = () => {
  const setSearchText = useQueryStore((s) => s.setSearchText);
  const navigate = useNavigate();

  const searchRef = useRef<HTMLInputElement>(null);
  return (
    <form
      onSubmit={(even) => {
        even.preventDefault();
        if (searchRef.current) {
          setSearchText(searchRef.current.value);
          navigate("/");
        }
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
