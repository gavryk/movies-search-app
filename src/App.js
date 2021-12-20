import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovies } from "./redux/actions/movies";
import { Route, Routes } from "react-router-dom";
import { Header } from "./components";
import Home from "./pages/Home/Home";
import Movie from "./pages/Movie/Movie";


const App = () => {
  const dispatch = useDispatch();
  const movies = useSelector(({ movies }) => movies.items.results);
  const pageNum = useSelector(({ movies }) => movies.pageNum);

  useEffect(() => {
    dispatch(fetchMovies(pageNum));
  }, [dispatch, pageNum]);

  const changePageNum = (num) => {
    console.log(num);
  }

  return (
    <div className="App">
      <Header />
      <div className="movies-wrapper">
        <Routes>
          <Route exact path="/" element={<Home movies={movies} changePage={changePageNum} />} />
          <Route exact path="/:type/:id" element={<Movie />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
