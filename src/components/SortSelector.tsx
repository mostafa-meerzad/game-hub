import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import useQueryStore from "../store";

const SortSelector = () => {
  const sortOrders = [
    { value: "", label: "relevance" },
    { value: "-added", label: "date added" },
    { value: "name", label: "name" },
    { value: "-released", label: "release date" },
    { value: "-metacritic", label: "popularity" },
    { value: "-rating", label: "average rating" },
  ];

  const setSortOrder = useQueryStore((s) => s.setSortOrder);
  const sortOrder = useQueryStore((s) => s.gameQuery.sortOrder);

  const currentSortOrder = sortOrders.find(
    (order) => order.value === sortOrder
  );
  return (
    <Menu>
      <MenuButton
        as={Button}
        rightIcon={<BsChevronDown />}
        textTransform={"capitalize"}
      >
        Order by: {currentSortOrder?.label || "relevance"}
      </MenuButton>
      <MenuList>
        {sortOrders.map((sortOrder) => (
          <MenuItem
            key={sortOrder.value}
            textTransform={"capitalize"}
            onClick={() => setSortOrder(sortOrder.value)}
          >
            {sortOrder.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
