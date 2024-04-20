import React from "react";

export const HeaderTabs = () => {
  return (
    <div className="header_categories">
      <ul>
        <li>
          <a href="#">
            <svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 24 24"
                fill="rgba(255,255,255,0.7)"
              >
                <path d="M17 8H3V6h14v2zm4-2h-2v2h2V6zm-4 5H3v2h14v-2zm4 0h-2v2h2v-2zm-4 5H3v2h14v-2zm4 0h-2v2h2v-2z"></path>
              </svg>
            </svg>
            Categories
          </a>
          <a href="#">Bestsellers</a>
          <a href="#">Videogames</a>
          <a href="#">Deals</a>
        </li>
      </ul>
    </div>
  );
};
