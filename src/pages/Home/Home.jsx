import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchMovies } from '../../redux/actions/movies';
import style from './Home.module.scss';

const Home = () => {
    const dispatch = useDispatch();
    const movies = useSelector(({ movies }) => movies.items);
    
    console.log(movies);

    useEffect(() => {
        dispatch(fetchMovies());
    }, [dispatch])

    return (
      <div className={style.mainMoviesWrapper}>
        <h2>Home Page</h2>
        <div className="movies">
          {movies && movies.map((movie) => <h2 key={movie.id}>{movie.original_title}</h2>)}
        </div>
      </div>
    );
}

export default Home
