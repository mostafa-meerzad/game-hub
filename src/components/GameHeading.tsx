import { Heading } from "@chakra-ui/react";
import usePlatform from "../hooks/usePlatform";
import useGenre from "../hooks/useGenre";
import useQueryStore from "../store";

const GameHeading = () => {
  const platformId = useQueryStore((s) => s.gameQuery.platformId);
  const platform = usePlatform(platformId);
  
  const genreId = useQueryStore((s) => s.gameQuery.genreId);
  const genre = useGenre(genreId);

  const heading = `${platform?.name || ""} ${genre?.name || ""} Game`;
  
  return (
    <Heading as="h1" marginY={5} fontSize={"5xl"}>
      {heading}
    </Heading>
  );
};

export default GameHeading;
