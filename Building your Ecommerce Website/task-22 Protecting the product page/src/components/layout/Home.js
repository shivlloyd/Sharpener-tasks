import "./Home.css";

const Home = () => {
  const tours = [
    {
      date: "JUL16",
      place: "DETROIT, MI",
      specPlace: "DTE ENERGY MUSIC THEATRE",
    },
    {
      date: "JUL19",
      place: "TORONTO, ON",
      specPlace: "BUDWEISER STAGE",
    },
    {
      date: "JUL 22",
      place: "BRISTOW, VA",
      specPlace: "JIGGY LUBE LIVE",
    },
    {
      date: "JUL 29",
      place: "PHOENIX, AZ",
      specPlace: "AK-CHIN PAVILION",
    },
    {
      date: "AUG 2",
      place: "LAS VEGAS, NV",
      specPlace: "T-MOBILE ARENA",
    },
    {
      date: "AUG 7",
      place: "CONCORD, CA",
      specPlace: "CONCORD PAVILION",
    },
  ];

  return (
    <section>
      <div className="Album">
        <button className="latest-album">Get our Latest Album</button>
        <button className="play-btn">►</button>
      </div>
      <div id="tours" className="container">
        <h2>TOURS</h2>
        <div>
          {tours.map((tour, index) => (
            <div className="tour-item" key={index}>
              <span className="tour-date">{tour.date}</span>
              <span className="tour-place">{tour.place}</span>
              <span className="tour-spec-place">{tour.specPlace}</span>
              <button className="buy-btn">BUY TICKETS</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Home;
