import { IconButton, Input, InputGroup, InputLeftElement, InputRightElement } from "@chakra-ui/react";
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import useQueryStore from "../store";

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
        {/* <InputLeftElement children={<BsSearch />} color={"gray.600"}/> */}

        <Input
          borderRadius={20}
          placeholder="Search Games"
          variant={"filled"}
          ref={searchRef}
        />
        <InputRightElement width="3rem">
          <IconButton
            aria-label="Search games"
            icon={<BsSearch />}
            size="md"
            variant="ghost"
            borderRadius={"full"}
            type="submit"
          />
        </InputRightElement>
      </InputGroup>
    </form>
  );
};

export default SearchInput;
