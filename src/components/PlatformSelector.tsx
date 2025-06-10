import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatform from "../hooks/usePlatform";
import usePlatforms from "../hooks/usePlatforms";
import useQueryStore from "../store";

const PlatformSelector = () => {
  const { data, error } = usePlatforms();
  const setPlatformId = useQueryStore((s) => s.setPlatformId);
  const platformId = useQueryStore((s) => s.gameQuery.platformId);
  const platform = usePlatform(platformId);

  if (error) return null;

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {platform?.name || "Platform"}
      </MenuButton>
      <MenuList>
        {data?.results.map((platform) => (
          <MenuItem
            key={platform.id}
            onClick={() => setPlatformId(platform.id)}
          >
            {platform.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformSelector;
