import { useQuery } from "@tanstack/react-query";
import axios from "../services/api-client";
import { FetchResponse } from "./useData";

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
