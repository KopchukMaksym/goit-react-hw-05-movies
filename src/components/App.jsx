import NavMenu from './Navigation/Navigation';

import { Route, Routes } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { FidgetSpinner } from 'react-loader-spinner';

const Home = lazy(() => import('pages/Home/HomePages'));
const MovieDetails = lazy(() => import('components/MovieDetails/MovieDetails'));
const Movies = lazy(() => import('pages/Movies/MoviesPages'));
const Cast = lazy(() => import('./MovieCast/MovieCast'));
const Reviews = lazy(() => import('./MovieReviews/MovieReviews'));

export const App = () => {
  return (
    <div>
      <NavMenu />
      <Suspense
        fallback={
          <FidgetSpinner
            visible={true}
            height="80"
            width="80"
            ariaLabel="dna-loading"
            wrapperStyle={{}}
            wrapperClass="dna-wrapper"
            ballColors={['#ff0000', '#00ff00', '#0000ff']}
            backgroundColor="#F4442E"
          />
        }
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<div>NotFound</div>} />
        </Routes>
      </Suspense>
    </div>
  );
};
