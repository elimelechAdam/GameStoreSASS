import { useQuery, useMutation, useQueryClient } from "react-query";
import { fetchHallOfFameGames, findGame } from "./../api/fetch";
export const useMsgQuerys = () => {
  const queryClient = useQueryClient();

  const fetchGamesQuery = () => {
    return useQuery({
      queryKey: ["fetchHallOfFameGames"],
      queryFn: () => fetchHallOfFameGames(),
    });
  };

  const findGameQuery = (id) => {
    return useQuery({
      queryKey: ["findGame", id],
      queryFn: () => findGame(id),
    });
  };

  return {
    fetchGamesQuery,
    findGameQuery,
  };
};
