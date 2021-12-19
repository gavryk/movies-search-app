import React from "react";
import noPoster from "../../assets/img/no-poster.jpg";
import style from "./Card.module.scss";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setType } from "../../redux/actions/movie";
const urlPoster = "https://image.tmdb.org/t/p/w500";

const Card = ({id, poster_path, title, name, vote_average, overview, media_type}) => {
  const dispatch = useDispatch();

  const setMovieType = () => {
    dispatch(setType(media_type));
  }

  return (
    <Link to={`/movie/${id}`} onClick={setMovieType} className={style.card} key={id}>
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
    </Link>
  );
};

export default Card;
