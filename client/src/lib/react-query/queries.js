import { useQuery, useMutation, useQueryClient } from "react-query";
import { fetchHallOfFameGames } from "./../api/fetch";
export const useMsgQuerys = () => {
  const queryClient = useQueryClient();

  const fetchGamesQuery = () => {
    return useQuery({
      queryKey: ["fetchHallOfFameGames"],
      queryFn: () => fetchHallOfFameGames(),
    });
  };

  return {
    fetchGamesQuery,
  };
};
