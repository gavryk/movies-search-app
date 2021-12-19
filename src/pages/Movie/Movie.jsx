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
  const { id } = useParams();
  const movie = useSelector(({ movie }) => movie.item);
  const movieType = useSelector(({ movie }) => movie.type);
  const isLoading = useSelector(({ movie }) => movie.isLoading);

  useEffect(() => {
    dispatch(fetchMovieInfo(id, movieType));
  }, [dispatch, id, movieType]);

  return (
    <>
      {!isLoading ? (
        <div className={style.moviePage}>
          <div className={style.pageTitle}>
            <h1>{movie.name ? movie.name : movie.title}</h1>
            <span className={style.rate}>Rate: {movie.vote_average}</span>
          </div>

          <div className={style.info}>
            <div className={style.poster}>
              <img
                src={
                  movie.poster_path
                    ? `${urlPoster}${movie.poster_path}`
                    : noPoster
                }
                alt="Poster"
              />
              <div className={style.buttons}>
                <a
                  href={movie.homepage}
                  target="_blank"
                  rel="noreferrer"
                  className={style.btn}
                >
                  Homepage
                </a>
                <a
                  href={`http://imdb.com/title/${movie.imdb_id}`}
                  target="_blank"
                  rel="noreferrer"
                  className={style.btn}
                >
                  IMDb
                </a>
              </div>
            </div>

            <div className={style.about}>
              <p>{movie.overview}</p>
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
