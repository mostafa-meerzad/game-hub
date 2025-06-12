import { SimpleGrid, Spinner, Text } from "@chakra-ui/react";
import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import useFetchGames from "../hooks/useFetchGames";
import GameCard from "./GameCard";
import GameCardContainer from "./GameCardContainer";
import GameCardSkeleton from "./GameCardSkeleton";

const GameGrid = () => {
  const { data, error, isLoading, hasNextPage, fetchNextPage } =
    useFetchGames();

  const fetchedGames =
    data?.pages.reduce((total, page) => total + page.results.length, 0) || 0;

  const gameCardsSkeleton = [1, 2, 3, 4, 5, 6];

  if (error) return <Text>{error.message}</Text>;
  return (
    <>
      <InfiniteScroll
        dataLength={fetchedGames}
        hasMore={!!hasNextPage}
        next={() => fetchNextPage()}
        loader={<Spinner />}
      >
        <SimpleGrid
          columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
          spacing={6}
          padding={"10px"}
          paddingY={5}
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
      </InfiniteScroll>
    </>
  );
};

export default GameGrid;
