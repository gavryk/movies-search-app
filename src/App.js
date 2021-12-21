import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovies, setPageNum } from "./redux/actions/movies";
import { Route, Routes } from "react-router-dom";
import { Header } from "./components";
import Home from "./pages/Home/Home";
import Movie from "./pages/Movie/Movie";
import { Search } from "./pages";


const App = () => {
  const dispatch = useDispatch();
  const movies = useSelector(({ movies }) => movies.items.results);
  const pageNum = useSelector(({ movies }) => movies.pageNum);

  useEffect(() => {
    dispatch(fetchMovies(pageNum));
  }, [dispatch, pageNum]);

  const changePageNum = (num) => {
    dispatch(setPageNum(num));
  }

  return (
    <div className="App">
      <Header pageNum={pageNum} />
      <div className="movies-wrapper">
        <Routes>
          <Route exact path="/" element={<Home movies={movies} changePage={changePageNum} />} />
          <Route path="/search" element={<Search />} />
          <Route path="/:type/:id" element={<Movie />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
