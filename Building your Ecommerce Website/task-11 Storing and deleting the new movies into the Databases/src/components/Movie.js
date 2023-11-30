import React from "react";

import classes from "./Movie.module.css";

const Movie = (props) => {
  async function deleteHandler(id) {
    const response = await fetch(
      `https://react-http-ef694-default-rtdb.firebaseio.com/movies/${id}.json`,
      {
        method: "DELETE",
      }
    );

    alert(`Movie "${props.title}" has been successfully deleted.`);
    //reloads after clicking ok on alert
    window.location.reload();
  }

  return (
    <li className={classes.movie}>
      <h2>{props.title}</h2>
      <h3>{props.releaseDate}</h3>
      <p>{props.openingText}</p>
      <button onClick={() => deleteHandler(props.id)}>Delete</button>
    </li>
  );
};

export default Movie;
