import React from 'react'
import style from './Home.module.scss';
import { Card, Loader, Paginator } from "../../components";
import { useSelector } from 'react-redux';

const Home = ({ movies, changePage }) => {
    const isLoading = useSelector(({ movies }) => movies.isLoading);
    const { page, total_pages } = useSelector(({ movies }) => movies.items);

    return (
      <div className={style.mainMoviesWrapper}>
        <h2 className={style.pageTitle}>Movies</h2>
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
        <Paginator page={ page } totalPages={ total_pages } onChangedPage={ changePage } />
      </div>
    );
}

export default Home
