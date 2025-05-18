import { SimpleGrid, Text } from "@chakra-ui/react";
import useFetchGames from "../hooks/useFetchGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";

const GameGrid = () => {
  const { games, error, loading } = useFetchGames();
  const gameCardsSkeleton = [1, 2, 3, 4, 5, 6];

  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3 }}
        spacing={10}
        padding={"10px"}
      >
        {loading
          ? gameCardsSkeleton.map((i) => <GameCardSkeleton key={i} />)
          : games.map((game) => <GameCard key={game.id} game={game} />)}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
