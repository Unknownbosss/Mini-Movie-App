import React from "react";
import MovieCard from "./MovieCard";

function Movies({ movies, page,setPage, isMovie }) {
  return (
    <>
      <section
        id="#"
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5"
      >
        {movies && movies.length > 0 &&
          movies.map((movie) => <MovieCard key={movie.id} movie={movie} isMovie={isMovie}/>)}
      </section>
      <div className="flex justify-center gap-4 mt-5">
        <button
          onClick={() => {
            window.scroll(0, 0);
            setPage((p) => p>1 ? p - 1: p);
          }} disabled={page == 1&&'true' }
          className="border p-2 w-28 font-bold text-2xl rounded-xl hover:opacity-50 duration-200 "
        >
          PREV
        </button>
        <button
          onClick={() => {
            window.scroll(0, 0);
            setPage((p) => p + 1);
          }}
          className="border p-2 w-28 font-bold text-2xl rounded-xl hover:opacity-50 duration-200 "
        >
          NEXT
        </button>
      </div>
    </>
  );
}

export default Movies;
