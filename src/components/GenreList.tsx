import useFetchGenres from "../hooks/useFetchGenres";

const GenreList = () => {
  const { data } = useFetchGenres();

  return (
    <ul>
      {data.map((genre) => (
        <li key={genre.id}> {genre.name}</li>
      ))}
    </ul>
  );
};

export default GenreList;
