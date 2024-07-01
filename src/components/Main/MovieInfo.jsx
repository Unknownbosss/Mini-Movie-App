import React from "react";

function MovieInfo({ movie }) {
  const {
    original_title,
    overview,
    release_date,
    genres,
    production_countries,
    production_companies,
    runtime,
    tagline,
    first_air_date,
    status,name,
    number_of_seasons,
  } = movie;

  const sumArray = (x) => {
    if (x.length < 1) return "";

    const addedArray = x.map((g) => g.name);
    return addedArray.join(", ");
  };

  return (
    <div>
      <h1 className="text-4xl">{original_title || name}</h1>
      <h2 className="text-xl">{tagline}</h2>
      <p className="text-lg my-5">{overview}</p>
      <div className="flex md:justify-between flex-col md:flex-row justify-around md:gap-4">
        <div>
          <p>
            <span className="font-semibold">Released: </span>
            {release_date || first_air_date}
          </p>
          <p>
            <span className="font-semibold">Genre: </span> {sumArray(genres)}
          </p>
          <p>
            <span className="font-semibold">Status: </span> {status}{" "}
          </p>
        </div>
        <div>
          {release_date ? (
            <p>
              <span className="font-semibold">Duration:</span>
              {runtime} Min
            </p>
          ) : (
            <p>
              <span className="font-semibold">Seasons: </span>
              {number_of_seasons}
            </p>
          )}

          <p>
            <span className="font-semibold">Country: </span>
            {sumArray(production_countries)}
          </p>
          <p>
            <span className="font-semibold">Production: </span>{" "}
            {sumArray(production_companies)}
          </p>
        </div>
      </div>
      <button className="bg-bsecondary text-white hover:bg-white hover:text-bsecondary duration-500 hover:border p-3 rounded-3xl text-2xl mt-5">
              Watch now
            </button>
    </div>
  );
}

export default MovieInfo;
