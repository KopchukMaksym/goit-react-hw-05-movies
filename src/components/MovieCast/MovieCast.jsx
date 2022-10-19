import { fetchApiMovieCast } from 'api/fetchApi';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Cast = () => {
  const [movie, setMovie] = useState([]);
  const { movieId } = useParams();

  const MovieCastApi = async () => {
    try {
      const {
        data: { cast },
      } = await fetchApiMovieCast(movieId);
      setMovie(cast);
    } catch (e) {
      console.log('error', e);
    }
  };

  useEffect(() => {
    MovieCastApi();
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      {movie?.map(el => {
        return (
          <div key={el.id}>
            <img
              style={{ width: '185px', height: '278px' }}
              alt={el.name}
              src={
                !!el.profile_path
                  ? `https://image.tmdb.org/t/p/w185${el.profile_path}`
                  : `https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg`
              }
            />
            <p>{el.name}</p>
            <p>
              Character:
              {el.character}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default Cast;
