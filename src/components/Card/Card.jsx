import React from "react";
import noPoster from "../../assets/img/no-poster.jpg";
import style from "./Card.module.scss";
const urlPoster = "https://image.tmdb.org/t/p/w500";

const Card = ({id, poster_path, title, name, vote_average, overview, ...props}) => {
  console.log(props);
  return (
    <div className={style.card} key={id}>
      <div className={style.cardImage}>
        <img
          src={
            poster_path ? `${urlPoster}${poster_path}` : noPoster
          }
          className="card-img-top"
          alt="..."
        />
      </div>
      <div className="card-body">
        <h5 className={style.title}>
          {title ? title : name}
          <span className={style.rate}>Rate: {vote_average}</span>
        </h5>
        <p className="card-text">{overview}</p>
      </div>
    </div>
  );
};

export default Card;
