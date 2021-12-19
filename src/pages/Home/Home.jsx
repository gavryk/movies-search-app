import React from 'react'
import style from './Home.module.scss';
const urlPoster = "https://image.tmdb.org/t/p/w500";

const Home = ({ movies }) => {

    return (
      <div className={style.mainMoviesWrapper}>
        <h2 className={style.pageTitle}>Movies</h2>
        <div className={style.movies}>
          {movies &&
            movies.map((movie) => (
              <div className="card" key={movie.id}>
                <img
                  src={`${urlPoster}${movie.backdrop_path}`}
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </div>
              </div>
            ))}
        </div>
      </div>
    );
}

export default Home
