import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../App";
import useFetchGenres from "../hooks/useFetchGenres";
import usePlatforms from "../hooks/usePlatforms";

interface Props {
  gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: Props) => {
  const { data } = usePlatforms();
  const platform = data.results.find((p) => p.id === gameQuery.platformId);

  const { data: genres } = useFetchGenres();
  const genre = genres?.results.find((g) => g.id === gameQuery.genreId);
  const heading = `${platform?.name || ""} ${genre?.name || ""} Game`;
  return (
    <Heading as="h1" marginY={5} fontSize={"5xl"}>
      {heading}
    </Heading>
  );
};

export default GameHeading;
