import { Hero } from "../componenets/Hero";
import { Sections } from "../componenets/Sections";
import { useQuery } from "react-query";
import { useMsgQuerys } from "../lib/react-query/queries";
import { Header } from "./../componenets/Header";

export function Home() {
  const { fetchGamesQuery } = useMsgQuerys();
  const { isLoading, error, data } = fetchGamesQuery();
  // const { data: genres } = fetchGenresQuery();
  // console.log(genres);
  return (
    <>
      <Hero />
      <Sections
        title={"Top games"}
        desc={"Top games of all time"}
        data={data?.results}
      />
    </>
  );
}

export default Home;
