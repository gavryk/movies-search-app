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
  const { pageNum, mediaType } = useSelector(({ movies }) => movies);
  const { appLang } = useSelector(({ settings }) => settings);  

  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch, pageNum, mediaType, appLang]);

  const changePageNum = (num) => {
    window.scrollTo(0, 0);
    dispatch(setPageNum(num));
  }


  return (
    <div className="App">
      <Header lang={appLang}/>
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
