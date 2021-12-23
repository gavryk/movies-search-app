import React from "react";
import noPoster from "../../assets/img/no-poster.jpg";
import style from "./Card.module.scss";
import { Link } from "react-router-dom";
const urlPoster = "https://image.tmdb.org/t/p/w500";

const Card = ({id, poster_path, title, name, vote_average, overview, media_type}) => {

  return (
    <Link to={`/${media_type}/${id}`} className={style.card} key={id}>
      <div className={style.cardImage}>
        <img
          src={poster_path ? `${urlPoster}${poster_path}` : noPoster}
          className="card-img-top"
          alt="..."
        />
        <span
          className={`${style.rate} ${
            vote_average < 7 && vote_average > 4 ? style.yellow : style.green
          } ${vote_average < 4 ? style.red : ''}`}
        >
          {vote_average}
        </span>
      </div>
      <div className="card-body">
        <h5 className={style.title}>{title ? title : name}</h5>
        <p className="card-text">{overview}</p>
      </div>
    </Link>
  );
};

export default Card;
