import React, { useEffect, useState } from "react";
import Movies from "./Movies";
import SearchBar from "./SearchBar";

function Main() {
  const [value, setValue] = useState('');
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);

  const fetchData = async () => {
    const api = import.meta.env.VITE_API_KEY;
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwZDgyNmRkMmQyYTMyNTZhNzkxNjAxMzdhZjljYWUxNyIsInN1YiI6IjY2NzQzYWVmNzIzNmE2MzA5NzIzNWRlMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.bvheM5iO8fDxGs7vx-vSRItgDYc0VZw_0i8GqQsIGBw",
      },
    };
    try {

      const url = value ? `https://api.themoviedb.org/3/search/multi?query=${value}&include_adult=false&language=en-US&page=${page}`: `https://api.themoviedb.org/3/trending/all/day?api_key=${api}&page=${page}`
      const response = await fetch(
        url,
        options
      );
      const data = await response.json();
      setMovies(data.results);
      console.log(data.results)
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [page, value]);
  return (
    <>
      <SearchBar value={value} setValue={setValue} setPage={setPage}/>

      <Movies movies={movies} page={page} setPage={setPage} />
    </>
  );
}

export default Main;
