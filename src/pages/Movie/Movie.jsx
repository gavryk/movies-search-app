import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchMovieInfo } from '../../redux/actions/movie';
import style from './Movie.module.scss';
import noPoster from "../../assets/img/no-poster.jpg";

const urlPoster = "https://image.tmdb.org/t/p/w500";

const Movie = () => {
    const dispatch = useDispatch();
    const { id } = useParams();
    const movie = useSelector(({ movie }) => movie.item);

    console.log(movie);

    useEffect(() => {
      dispatch(fetchMovieInfo(id));
    }, [dispatch, id]);

    return (
      <div className={style.moviePage}>
        <div className={style.pageTitle}>
          <h1>{movie.title}</h1>
          <span className={style.rate}>Rate: {movie.vote_average}</span>
        </div>

        <div className={style.info}>
          <div className={style.poster}>
            <img
              src={movie.poster_path ? `${urlPoster}${movie.poster_path}` : noPoster}
              alt="Poster"
            />
          </div>
        </div>
      </div>
    );
}

export default Movie
