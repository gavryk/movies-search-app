import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchMovieInfo } from "../../redux/actions/movie";
import style from "./Movie.module.scss";
import noPoster from "../../assets/img/no-poster.jpg";
import { Loader } from "../../components";

const urlPoster = "https://image.tmdb.org/t/p/w500";

const Movie = () => {
  const dispatch = useDispatch();
  const { id, type } = useParams();
  const movie = useSelector(({ movie }) => movie.item);
  const isLoading = useSelector(({ movie }) => movie.isLoading);
  const releaseDate = new Date(movie.release_date);
  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  useEffect(() => {
    dispatch(fetchMovieInfo(id, type));
  }, [dispatch, id, type]);

  return (
    <>
      {!isLoading ? (
        <div className={style.moviePage}>
          <div className={style.pageTitle}>
            <div>
              <h1>{movie.name ? movie.name : movie.title}</h1>
              <span>{movie.tagline && movie.tagline}</span>
            </div>
            <span className={style.rate}>Rate: {movie.vote_average}</span>
          </div>

          <div className={style.info}>
            <div className={style.poster}>
              {movie.adult && <span class={style.adult}>18+</span>}
              <img
                src={
                  movie.poster_path
                    ? `${urlPoster}${movie.poster_path}`
                    : noPoster
                }
                alt="Poster"
              />
              <div className={style.buttons}>
                {movie.homepage && (
                  <a
                    href={movie.homepage}
                    target="_blank"
                    rel="noreferrer"
                    className={style.btn}
                  >
                    Homepage
                  </a>
                )}
                {movie.imdb_id && (
                  <a
                    href={`http://imdb.com/title/${movie.imdb_id}`}
                    target="_blank"
                    rel="noreferrer"
                    className={style.btn}
                  >
                    IMDb
                  </a>
                )}
              </div>
            </div>

            <div className={style.about}>
              <p>{movie.overview}</p>
              {movie.genres && (
                <ul className={style.genres}>
                  <h3>Genres:</h3>
                  {movie.genres.map((gen, index) => (
                    <li key={`${gen.name}_${index}`}>"{gen.name}"</li>
                  ))}
                </ul>
              )}
              {movie.release_date && (
                <h4>Date: {`${releaseDate.getDate()} ${monthNames[releaseDate.getMonth()]} ${releaseDate.getFullYear()}`}</h4>
              )}
            </div>
          </div>
        </div>
      ) : (
        <Loader />
      )}
    </>
  );
};

export default Movie;
