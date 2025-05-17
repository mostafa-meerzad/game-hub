import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

export interface Game {
  id: number;
  name: string;
  background_image: string;
}

interface FetchGamesResponse {
  count: number;
  results: Game[];
}

const useFetchGames = () => {
    // const [games, setGames] = useState<Game[]>([
    //   { id: 3498, name: "Grand Theft Auto V" },

    //   { id: 3328, name: "The Witcher 3: Wild Hunt" },

    //   { id: 4200, name: "Portal 2" },

    //   { id: 4291, name: "Counter-Strike: Global Offensive" },

    //   { id: 5286, name: "Tomb Raider (2013)" },

    //   { id: 13536, name: "Portal" },

    //   { id: 12020, name: "Left 4 Dead 2" },

    //   { id: 5679, name: "The Elder Scrolls V: Skyrim" },

    //   { id: 28, name: "Red Dead Redemption 2" },

    //   { id: 4062, name: "BioShock Infinite" },

    //   { id: 13537, name: "Half-Life 2" },

    //   { id: 802, name: "Borderlands 2" },

    //   { id: 3439, name: "Life is Strange" },

    //   { id: 4286, name: "BioShock" },

    //   { id: 32, name: "Destiny 2" },

    //   { id: 58175, name: "God of War (2018)" },

    //   { id: 3070, name: "Fallout 4" },

    //   { id: 3939, name: "PAYDAY 2" },

    //   { id: 1030, name: "Limbo" },

    //   { id: 11859, name: "Team Fortress 2" },
    // ]);
//   const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");
  const [games, setGames] = useState<Game[]>([])

  useEffect(() => {
    const controller = new AbortController();

    apiClient
      .get<FetchGamesResponse>("/games", { signal: controller.signal })
      .then((res) => {
        setGames(res.data.results);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
      });

    return () => controller.abort();
  }, []);

  return { games, error };
};

export default useFetchGames;
