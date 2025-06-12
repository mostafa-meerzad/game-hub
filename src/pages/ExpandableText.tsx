import { Button, Collapse, Text, useDisclosure } from "@chakra-ui/react";

const ExpandableText = ({text}: {text: string}) => {
      const { isOpen, onToggle } = useDisclosure();

  return (
      <>
        <Collapse startingHeight={70} in={isOpen}>
          <Text noOfLines={isOpen ? undefined : 3}>{text}</Text>
        </Collapse>
        <Button onClick={onToggle} size={"sm"} mt={2} variant={"solid"}>
          {isOpen ? "Show Less" : "Read More"}
        </Button>
      </>
  );
};

export default ExpandableText;
