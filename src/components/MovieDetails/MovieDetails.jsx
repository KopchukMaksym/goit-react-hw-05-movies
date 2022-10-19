import { IoIosArrowBack } from 'react-icons/io';
import { fetchApiMovieDetails } from 'api/fetchApi';
import { useEffect, useState } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';

import s from '../MovieDetails/MovieDetails.module.css';

const MovieDetails = () => {
  const [movie, setMovie] = useState({});
  const { movieId } = useParams();
  const location = useLocation();

  const MovieDetailsApi = async () => {
    try {
      const { data } = await fetchApiMovieDetails(movieId);
      setMovie(data);
    } catch (e) {
      console.log('error', e);
    }
  };

  useEffect(() => {
    MovieDetailsApi();

    // eslint-disable-next-line
  }, []);

  return (
    <div>
      <Link to={location.state?.from ?? '/'}>
        <button className={s.btn_back} type="button">
          <IoIosArrowBack className={s.icon} />
          Go back
        </button>
      </Link>
      <div className={s.img_block}>
        <img
          alt={movie.original_title}
          src={
            !!movie.poster_path
              ? `https://image.tmdb.org/t/p/w185/${movie.poster_path}`
              : `https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg`
          }
        />
        <div>
          <h2>{movie.original_title}</h2>
          <p>User score: {Math.floor(movie.vote_average * 10)}%</p>
          <h3>Overview</h3>
          <p>{movie.overview}</p>
          <h4>Genres</h4>
          <p>{movie?.genres?.map(el => el.name).join(' ')}</p>
        </div>
      </div>
      <hr />
      <div className={s.info_block}>
        <p>Additional information</p>
        <Link to={`cast`} state={{ from: location.state.from }}>
          Cast
        </Link>
        <Link to={`reviews`} state={{ from: location.state.from }}>
          Reviews
        </Link>
      </div>
      <hr />
      <Outlet />
    </div>
  );
};

export default MovieDetails;
