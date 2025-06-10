import {
  Button,
  Heading,
  HStack,
  Image,
  List,
  ListItem,
  Spinner,
} from "@chakra-ui/react";
import useFetchGenres from "../hooks/useFetchGenres";
import getCroppedImageUrl from "../services/image-url";
import useQueryStore from "../store";

const GenreList = () => {
  const selectedGenreId = useQueryStore((s) => s.gameQuery.genreId);
  const setSelectedGenreId = useQueryStore((s) => s.setGenreId);

  const { data, isLoading, error } = useFetchGenres();

  if (error) return null;

  if (isLoading) return <Spinner />;

  return (
    <>
      <Heading fontSize={"2xl"} marginBlock={3}>
        Genres
      </Heading>
      <List>
        {data?.results.map((genre) => (
          <ListItem key={genre.id}>
            <HStack paddingY={2} gap={2}>
              <Image
                boxSize={"32px"}
                borderRadius={8}
                objectFit={"cover"}
                src={getCroppedImageUrl(genre.image_background)}
              />
              <Button
                fontWeight={selectedGenreId === genre.id ? "bold" : "normal"}
                whiteSpace={"normal"}
                textAlign={"left"}
                onClick={() => setSelectedGenreId(genre.id)}
                variant={"link"}
                fontSize={"lg"}
              >
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;
