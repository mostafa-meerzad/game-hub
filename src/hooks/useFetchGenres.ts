import { useQuery } from "@tanstack/react-query";
import axios, { FetchResponse } from "../services/api-client";

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

const useFetchGenres = () => {
  return useQuery({
    queryKey: ["genres"],
    queryFn: () =>
      axios.get<FetchResponse<Genre>>("/genres").then((res) => res.data),
  });
};
export default useFetchGenres;
