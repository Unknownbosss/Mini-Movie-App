import React, { useEffect } from "react";
import { BiLogIn } from "react-icons/bi";
import { useParams, useLoaderData } from "react-router-dom";
import MovieInfo from "../components/Main/MovieInfo";

function MovieDetails(props) {
  // const {id} = useParams();

  const movie = useLoaderData();
  // useEffect(() => {
  //     const movieLoader = async ({params}) => {
  //         const api =
  //           "0d826dd2d2a3256a79160137af9cae17" || import.meta.env.VITE_API_KEY;
  //         const options = {
  //           method: "GET",
  //           headers: {
  //             accept: "application/json",
  //             Authorization:
  //               "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwZDgyNmRkMmQyYTMyNTZhNzkxNjAxMzdhZjljYWUxNyIsInN1YiI6IjY2NzQzYWVmNzIzNmE2MzA5NzIzNWRlMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.bvheM5iO8fDxGs7vx-vSRItgDYc0VZw_0i8GqQsIGBw",
  //           },
  //         };
  //         const res = await fetch(`
  //     https://api.themoviedb.org/3/movie/${params}?api_key=${api}`, options);
  //         const data = await res.json();
  //         console.log(data);
  //         return data;
  //     }
  //     movieLoader(id)
  // })

  const { backdrop_path, poster_path } = movie;

  // console.log(movie);

  const movieSoruce = (path) => {
    return `https://media.themoviedb.org/t/p/w220_and_h330_face/${path}`;
  };
  return (
    // (movie &&  )

    movie && (
      <section className="relative h-screen w-full text-bsecondary">
        <img
          src={movieSoruce(backdrop_path)}
          alt=""
          className="w-full h-full rounded-3xl object-contain"
        />
        <div className="absolute bottom-[-20%] p-5 bg-white w-full rounded-3xl flex justify-between gap-12">
          <div className="hidden lg:block flex-shrink-0">
            <img src={movieSoruce(poster_path)} alt="" className="rounded-xl" />
           
          </div>
          <MovieInfo movie={movie}/>
        </div>
      </section>
    )
  );
}

export const movieLoader = async ({ params }) => {
  console.log(params);
  const api =
    "0d826dd2d2a3256a79160137af9cae17" || import.meta.env.VITE_API_KEY;
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwZDgyNmRkMmQyYTMyNTZhNzkxNjAxMzdhZjljYWUxNyIsInN1YiI6IjY2NzQzYWVmNzIzNmE2MzA5NzIzNWRlMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.bvheM5iO8fDxGs7vx-vSRItgDYc0VZw_0i8GqQsIGBw",
    },
  };
  const res = await fetch(
    `
https://api.themoviedb.org/3/${params.media_type}/${params.id}?api_key=${api}`,
    options
  );
  const data = await res.json();
  return data;
};

export default MovieDetails;
