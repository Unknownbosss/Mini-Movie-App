import { useEffect, useState } from "react";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import MainLayout from "./components/MainLayout";
import Main from "./components/Main/Main";
import MoviesPage from "./pages/MoviesPage";
import SeriesPage from "./pages/SeriesPage";
import MovieDetails from "./pages/MovieDetails";
import { movieLoader } from "./pages/MovieDetails";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route index element={<Main />} />
      <Route path="/movies" element={<MoviesPage />} />
      <Route path="/series" element={<SeriesPage />} />
      <Route path="/:media_type/:id" loader={movieLoader} element={<MovieDetails />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

//  <div className="flex flex-col justify-center p-5 md:px-36 bg-bsecondary font-mono text-white">
//     <Header />
//     <Main />
//   </div>
