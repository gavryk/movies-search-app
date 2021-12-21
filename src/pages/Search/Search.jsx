import React, { useEffect } from "react";
import style from "./Search.module.scss";
import { Card, Loader, Paginator } from "../../components";
import { useDispatch, useSelector } from "react-redux";
import { searchMovies, setSearchPageNum } from "../../redux/actions/search";

const Search = () => {
  const dispatch = useDispatch();
  const movies = useSelector(({ search }) => search.items.results);
  const isLoading = useSelector(({ search }) => search.isLoading);
  const searchText = useSelector(({ search }) => search.searchText);
  const pageNum = useSelector(({ search }) => search.pageNum);
  const { page, total_pages, total_results } = useSelector(({ search }) => search.items);

  useEffect(() => {
    dispatch(searchMovies(searchText, pageNum));
  }, [dispatch, pageNum, searchText]);

  const changeSearchPageNum = (num) => {
    window.scrollTo(0, 0);
    dispatch(setSearchPageNum(num));
  };

  return (
    <div className={style.mainMoviesWrapper}>
      <div className={style.pageTitleBlock}>
        <h2 className={style.pageTitle}>Search Movies: "{searchText}"</h2>
        <h4>Results: {total_results} movies</h4>
      </div>
      {!isLoading ? (
        <>
          <div className={style.movies}>
            {movies &&
              movies.map((movie) => <Card key={movie.id} {...movie} />)}
          </div>
          <Paginator
            page={page}
            totalPages={total_pages}
            onChangedPage={changeSearchPageNum}
          />
        </>
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default Search;
