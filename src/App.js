import React from "react";
import { Route, Routes } from "react-router-dom";
import { Header } from "./components";
import Home from "./pages/Home/Home";


const App = () => {

  return (
    <div className="App">
      <Header />
      <div className="movies-wrapper">
        <Routes>
          <Route exact path="/" element={<Home />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
