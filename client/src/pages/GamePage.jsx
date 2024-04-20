import React from "react";
import { useParams } from "react-router-dom";
import { useMsgQuerys } from "../lib/react-query/queries";

export const GamePage = () => {
  // console log the params to see what is being passed
  const { gameid } = useParams();
  const { findGameQuery } = useMsgQuerys();
  const { isLoading, error, data } = findGameQuery(gameid);
  // name,background_image,background_image_additional,added_by_status,description,developers,
  // genres,parent_platforms,tags,stores,website,rating
  console.log(data);
  return (
    <>
      <div className="gamepage">
        <img src={data?.background_image} alt="Game" />
        <div className="gamepage_section">
          <h1 className="gamepage_name">{data?.name}</h1>
          <p>Rating: {data?.rating}</p>
        </div>
        <div className="gamepage_section">
          <p>{data?.description_raw}</p>
        </div>
        <div className="gamepage_section">
          <h2>Developers</h2>
          <ul>
            {data?.developers.map((dev) => (
              <li key={dev.id}>{dev.name}</li>
            ))}
          </ul>
        </div>
        <div className="gamepage_section">
          <h2>Genres</h2>
          <ul>
            {data?.genres.map((genre) => (
              <li key={genre.id}>{genre.name}</li>
            ))}
          </ul>
        </div>
        <div className="gamepage_section">
          <h2>Platforms</h2>
          <ul>
            {data?.parent_platforms.map((platform) => (
              <li key={platform.platform.id}>{platform.platform.name}</li>
            ))}
          </ul>
        </div>
        <div className="gamepage_section">
          <h2>Tags</h2>
          <ul>
            {data?.tags.map((tag) => (
              <li key={tag.id}>{tag.name}</li>
            ))}
          </ul>
        </div>
        <div className="gamepage_section">
          <h2>Stores</h2>
          <ul>
            {data?.stores.map((store) => (
              <li key={store.id}>{store.store.name}</li>
            ))}
          </ul>
        </div>
        <a href={data?.website}>Website</a>
      </div>
    </>
  );
};
