import { Header } from "./componenets/Header";
import { Hero } from "./componenets/Hero";
import { Sections } from "./componenets/Sections";
import { useQuery } from "react-query";
import { useMsgQuerys } from "./lib/react-query/queries";
function App() {
  const { fetchGamesQuery } = useMsgQuerys();
  const { isLoading, error, data } = fetchGamesQuery();
  return (
    <>
      <Header />
      <Hero />
      <Sections
        title={"Hall of fame"}
        desc={"Top 12 games for the current year"}
        data={data?.results}
      />
    </>
  );
}

export default App;
