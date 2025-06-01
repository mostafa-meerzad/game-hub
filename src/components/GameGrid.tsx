import { SimpleGrid, Text } from "@chakra-ui/react";
import { GameQuery } from "../App";
import useFetchGames from "../hooks/useFetchGames";
import GameCard from "./GameCard";
import GameCardContainer from "./GameCardContainer";
import GameCardSkeleton from "./GameCardSkeleton";

interface Props {
  gameQuery: GameQuery;
}

const GameGrid = ({ gameQuery }: Props) => {
  const { data, error, isLoading } = useFetchGames(gameQuery);
  const gameCardsSkeleton = [1, 2, 3, 4, 5, 6];

  if (error) return <Text>{error.message}</Text>;
  return (
    <SimpleGrid
      columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
      spacing={6}
      padding={"10px"}
    >
      {isLoading
        ? gameCardsSkeleton.map((skeleton, i) => (
            <GameCardContainer key={i}>
              <GameCardSkeleton key={skeleton} />
            </GameCardContainer>
          ))
        : data?.results.map((game) => (
            <GameCardContainer key={game.id}>
              <GameCard key={game.id} game={game} />
            </GameCardContainer>
          ))}
    </SimpleGrid>
  );
};

export default GameGrid;
