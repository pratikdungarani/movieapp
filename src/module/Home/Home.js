import React from "react";
import HomeBanner from "./HomeBanner/HomeBanner";
import PopularMovieList from "./MovieList/MovieList";

const Home = () => {
  return (
    <>
      <HomeBanner />
      <PopularMovieList />
    </>
  );
};

export default Home;
