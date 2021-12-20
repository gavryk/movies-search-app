import React from 'react'
import style from './Home.module.scss';
import { Card, Loader } from "../../components";
import { useSelector } from 'react-redux';

const Home = ({ movies }) => {
    const isLoading = useSelector(({ movies }) => movies.isLoading);
    
    return (
      <div className={style.mainMoviesWrapper}>
        <h2 className={style.pageTitle}>Movies222</h2>
        {
        !isLoading 
          ? (
            <div className={style.movies}>
              {movies &&
                movies.map((movie) => <Card key={movie.id} {...movie} />)}
            </div>
          )
          : <Loader/>
        }
      </div>
    );
}

export default Home
