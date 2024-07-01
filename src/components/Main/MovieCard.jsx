import React from "react";
import { Link } from "react-router-dom";
import { FaPlay } from "react-icons/fa";

function MovieCard({ movie, isMovie }) {
  const {
    original_title,
    release_date,
    backdrop_path,
    first_air_date,
    original_name,
    media_type,
    id,
  } = movie;

  const movieSoruce = (path) => {
    return `https://media.themoviedb.org/t/p/w220_and_h330_face/${path}`;
  };

  ///${original_title || original_name}/${movie.id}
  return (
    <div className="w-full mx-auto my-4">
      <div className="relative">
        <img
          src={
            backdrop_path
              ? movieSoruce(backdrop_path)
              : `http://via.placeholder.com/220x330`
          }
          alt="image"
          decoding="async"
          className="object-cover w-full rounded-md"
          loading="lazy"
          height={330}
        />
        <Link
          to={`/${media_type || (isMovie ? "movie" : "tv")}/${id}`}
          className="absolute inset-0 hover:opacity-100 duration-200 opacity-0 flex items-center justify-center bg-bsecondary bg-opacity-50"
        >
          <FaPlay className="text-4xl"/>
        </Link>
      </div>
      <Link to={`/${media_type || (isMovie ? "movie" : "tv")}/${id}`} className="text-base font-bold mt-2">
        {original_title || original_name}
      </Link>
      <div className="flex justify-between my-2">
        <p className="font-light">
          {(first_air_date || release_date)?.slice(0, 4)}
        </p>
        <div className="border p-1 rounded text-sm uppercase">
          {media_type || (isMovie ? "movie" : "tv")}
        </div>
      </div>
    </div>
  );
}

export default MovieCard;
