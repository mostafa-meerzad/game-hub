import { useQuery } from "@tanstack/react-query";
import platforms from "../data/platforms";
import APIClient, { FetchResponse } from "../services/api-client";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

const apiClient = new APIClient<Platform>("/platforms/list/parents");

// const usePlatform = () => ({ data: platforms, error: false });
const usePlatform = () =>
  useQuery<FetchResponse<Platform>>({
    queryKey: ["platforms"],
    queryFn: apiClient.getAll,
    initialData: { count: platforms.length, results: platforms },
  });

export default usePlatform;
