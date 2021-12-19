import React from 'react'
import style from './Home.module.scss';
import noPoster from "../../assets/img/no-poster.jpg";
const urlPoster = "https://image.tmdb.org/t/p/w500";

const Home = ({ movies }) => {

    return (
      <div className={style.mainMoviesWrapper}>
        <h2 className={style.pageTitle}>Movies</h2>
        <div className={style.movies}>
          {movies &&
            movies.map((movie) => (
              <div className={style.card} key={movie.id}>
                <div className={style.cardImage}>
                  <img
                    src={
                      movie.poster_path
                        ? `${urlPoster}${movie.poster_path}`
                        : noPoster
                    }
                    className="card-img-top"
                    alt="..."
                  />
                </div>
                <div className="card-body">
                  <h5 className={style.title}>
                    {movie.title ? movie.title : movie.name}
                    <span className={ style.rate }>
                      Rate: {movie.vote_average}
                    </span>
                  </h5>
                  <p className="card-text">{movie.overview}</p>
                </div>
              </div>
            ))}
        </div>
      </div>
    );
}

export default Home
