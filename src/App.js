import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovies } from "./redux/actions/movies";
import { Route, Routes } from "react-router-dom";
import { Header } from "./components";
import Home from "./pages/Home/Home";


const App = () => {
  const dispatch = useDispatch();
  const movies = useSelector(({ movies }) => movies.items);

  console.log(movies);

  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);

  return (
    <div className="App">
      <Header />
      <div className="movies-wrapper">
        <Routes>
          <Route exact path="/" element={<Home movies={movies} />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
