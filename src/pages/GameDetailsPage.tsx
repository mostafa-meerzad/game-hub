import {
  Heading,
  Spinner
} from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import GameAttributes from "../components/GameAttributes";
import GameScreenShots from "../components/GameScreenShots";
import GameTrailer from "../components/GameTrailer";
import useGame from "../hooks/useGame";
import ExpandableText from "./ExpandableText";

const GameDetailsPage = () => {
  const { slug } = useParams();
  const { data: game, isLoading, error } = useGame(slug!);

  if (isLoading) return <Spinner />;

  if (error || !game) throw error;

  return (
    <>
      <Heading>{game.name}</Heading>
      <ExpandableText text={game.description_raw} />
      <GameTrailer gameId={game.id} />
      <GameAttributes game={game} />
      <GameScreenShots gameId={game.id} />
    </>
  );
};

export default GameDetailsPage;
