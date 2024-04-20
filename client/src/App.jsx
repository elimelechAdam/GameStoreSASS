import { useQuery } from "react-query";
import { useMsgQuerys } from "./lib/react-query/queries";
import { Home } from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import { GamePage } from "./pages/GamePage";
import { Header } from "./componenets/Header";
function App() {
  const { fetchGamesQuery } = useMsgQuerys();
  const { isLoading, error, data } = fetchGamesQuery();
  // const { data: genres } = fetchGenresQuery();
  // console.log(genres);
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:gameid" element={<GamePage />} />
      </Routes>
    </>
  );
}

export default App;
