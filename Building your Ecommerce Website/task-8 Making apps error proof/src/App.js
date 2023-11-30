import React, { useState, useEffect } from "react";
import MoviesList from "./components/MoviesList";
import "./App.css";

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsloading] = useState(false);
  const [error, setError] = useState(null);
  const [retryCount, setRetryCount] = useState(0);
  const [retryIntervalId, setRetryIntervalId] = useState(null);

  useEffect(() => {
    if (retryCount > 0) {
      setRetryIntervalId(
        setInterval(() => {
          fetchMoviesHandler();
        }, 5000)
      );
    }

    return () => {
      clearInterval(retryIntervalId);
    };
  }, [retryCount]);

  async function fetchMoviesHandler() {
    setIsloading(true);
    setError(null);

    try {
      const response = await fetch("https://swapi.dev/api/film");
      if (!response.ok) {
        throw new Error("Something went wrong ....Retrying");
      }

      const data = await response.json();

      const transformedMovies = data.results.map((movieData) => {
        return {
          id: movieData.episode_id,
          title: movieData.title,
          openingText: movieData.opening_crawl,
          releaseDate: movieData.release_date,
        };
      });

      setMovies(transformedMovies);
      setRetryCount(0);
    } catch (error) {
      setError(error.message);
      setRetryCount(retryCount + 1);
    }
    setIsloading(false);
  }

  function cancleRetryHandler() {
    clearInterval(retryIntervalId);
    setRetryCount(0);
  }

  let content = <p>Found No Movies.</p>;

  if (movies.length > 0) {
    content = <MoviesList movies={movies} />;
  }

  if (error) {
    content = (
      <React.Fragment>
        <p>{error}</p>
        <button onClick={fetchMoviesHandler}>Retry</button>
        <button onClick={cancleRetryHandler}>Cancel</button>
      </React.Fragment>
    );
  }

  if (isLoading) {
    content = <p>Loading...</p>;
  }

  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>{content}</section>
    </React.Fragment>
  );
}

export default App;
