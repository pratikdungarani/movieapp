import React from "react";
import MovieBanner from "./MovieBanner/MovieBanner";
import SimilarMovie from "./SimilarMovie/SimilarMovie";
import MovieReviews from "./MovieReviews/MovieReviews";

function MovieDetail() {
  return (
    <>
      <MovieBanner />
      <SimilarMovie />
      <MovieReviews />
    </>
  );
}

export default MovieDetail;
