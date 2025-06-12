import { useParams } from "react-router-dom";
import useGame from "../hooks/useGame";
import {
  Button,
  Collapse,
  Heading,
  Spinner,
  Text,
  useDisclosure,
} from "@chakra-ui/react";

const GameDetailsPage = () => {
  const { slug } = useParams();
  const { data: game, isLoading, error } = useGame(slug!);
  const { isOpen, onToggle } = useDisclosure();

  if (isLoading) return <Spinner />;

  if (error || !game) throw error;

  return (
    <>
      <Heading>{game.name}</Heading>
      <Collapse startingHeight={70} in={isOpen}>
        <Text noOfLines={isOpen ? undefined : 3}>{game.description_raw}</Text>
      </Collapse>
      <Button onClick={onToggle} size={"sm"} mt={2} variant={"solid"}>
        {isOpen ? "Show Less" : "Read More"}
      </Button>
    </>
  );
};

export default GameDetailsPage;
