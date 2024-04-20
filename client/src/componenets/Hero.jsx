export const Hero = () => {
  return (
    <section className="section_hero">
      <div className="section_hero_imgs">
        <img src="https://via.placeholder.com/300" alt="Hero Image" />
        <img src="https://via.placeholder.com/500" alt="Hero Image" />
        <img src="https://via.placeholder.com/300" alt="Hero Image" />
      </div>
      {/* Tabs */}
      <div className="section_hero_tabs">
        <button>Bestsellers</button>
        <button>Deal of the Day</button>
        <button>Trending</button>
        <button>Random Keys</button>
        <button>Upcoming Games</button>
      </div>
    </section>
  );
};
