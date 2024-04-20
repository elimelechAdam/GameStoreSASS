import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Sections = ({ title, desc, data }) => {
  const [game, setGame] = useState("");
  const navigate = useNavigate();
  data = data?.sort((a, b) => b.rating - a.rating).slice(0, 6);

  const setGameFunc = (id) => {
    setGame(id);
    navigate(`/${id}`);
  };
  return (
    <section className="section_games">
      {/* Title,Description and grid of 6 games with image and price */}
      <h2>{title}</h2>
      <p>{desc}</p>
      <div className="section__grid">
        {data?.map((game) => (
          <div
            className="section__game"
            key={game.id}
            value={game.id}
            onClick={(e) => {
              setGameFunc(game.id);
            }}
          >
            <img src={game.background_image} alt="Game" />
            <div className="section__game_info">
              <h1>{game.name}</h1>
              <div className="section_rateprice">
                <span>{game.rating}</span>
                <span>{game.released.slice(0, 4)}</span>
              </div>
              <div className="game_platforms_tags">
                {game.parent_platforms.map((platform) => (
                  <p
                    className="game_platforms_tags_item"
                    key={platform.platform.id}
                  >
                    {platform.platform.name}
                  </p>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
