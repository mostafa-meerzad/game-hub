import useData from "./useData";

interface Genre {
  id: string;
  name: string;
}

const useFetchGenres = () => useData<Genre>("/genres");

export default useFetchGenres;
