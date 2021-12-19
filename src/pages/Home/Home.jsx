import React from 'react'
import style from './Home.module.scss';
import { Card } from "../../components";

const Home = ({ movies }) => {

    return (
      <div className={style.mainMoviesWrapper}>
        <h2 className={style.pageTitle}>Movies</h2>
        <div className={style.movies}>
          {movies &&
            movies.map((movie) => (
              <Card key={ movie.id } {...movie }/>
            ))}
        </div>
      </div>
    );
}

export default Home
