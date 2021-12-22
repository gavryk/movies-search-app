import React from 'react'
import style from './Home.module.scss';
import { Card, Loader, MediaTypes, Paginator } from "../../components";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { setType } from '../../redux/actions/movies';

const typesList = ["Movie", "TV shows"];

const Home = ({ movies, changePage }) => {
    const dispatch = useDispatch();
    const {isLoading, mediaType } = useSelector(({ movies }) => movies);
    const { page, total_pages, total_results } = useSelector(({ movies }) => movies.items);

    const onClickType = (type) => {
      dispatch(setType(type));
    }

    return (
      <div className={style.mainMoviesWrapper}>
        <div className={style.pageTitleBlock}>
          <h2 className={style.pageTitle}>Trending Movies</h2>
          <h4>Results: {total_results}</h4>
        </div>
        <div className={style.typesList}>
          <MediaTypes
            activeType={mediaType}
            typesList={typesList}
            onClickType={onClickType}
          />
        </div>
        {!isLoading ? (
          <div className={style.movies}>
            {movies &&
              movies.map((movie) => <Card key={movie.id} {...movie} />)}
          </div>
        ) : (
          <Loader />
        )}
        <Paginator
          page={page}
          totalPages={total_pages}
          onChangedPage={changePage}
        />
      </div>
    );
}

export default Home
