import { Box, Button, SimpleGrid, Text } from "@chakra-ui/react";
import { GameQuery } from "../App";
import useFetchGames from "../hooks/useFetchGames";
import GameCard from "./GameCard";
import GameCardContainer from "./GameCardContainer";
import GameCardSkeleton from "./GameCardSkeleton";
import React from "react";

interface Props {
  gameQuery: GameQuery;
}

const GameGrid = ({ gameQuery }: Props) => {
  const {
    data,
    error,
    isLoading,
    hasNextPage,
    isFetchingNextPage,
    fetchNextPage,
  } = useFetchGames(gameQuery);
  const gameCardsSkeleton = [1, 2, 3, 4, 5, 6];

  if (error) return <Text>{error.message}</Text>;
  return (
    <Box paddingY={5}>
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
          : data.pages.map((game, index) => (
              <React.Fragment key={index}>
                {game.results.map((game) => (
                  <GameCardContainer key={game.id}>
                    <GameCard key={game.id} game={game} />
                  </GameCardContainer>
                ))}
              </React.Fragment>
            ))}
      </SimpleGrid>
      {hasNextPage && (
        <Button onClick={() => fetchNextPage()}>
          {" "}
          {isFetchingNextPage ? "Loading..." : "Load More"}
        </Button>
      )}
    </Box>
  );
};

export default GameGrid;
