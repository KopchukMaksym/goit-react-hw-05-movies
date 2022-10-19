import { TrendingList } from 'components/Trending/TrendingList';
import { Form } from '../../components/SearchForm/SearchForm';

import { fetchApiSearch } from 'api/fetchApi';
import { useEffect, useState } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query');
  const location = useLocation();

  const movieSearchApi = async query => {
    try {
      const {
        data: { results },
      } = await fetchApiSearch(query);
      setMovies(results);
    } catch (e) {
      console.log('error', e);
    }
  };

  const handleSubmit = query => {
    setSearchParams({ query });
    movieSearchApi(query);
  };

  useEffect(() => {
    !!query && movieSearchApi(query);
  }, [query]);

  return (
    <div>
      <Form handleSubmit={handleSubmit} />
      {!!movies.length && (
        <TrendingList
          movies={movies}
          from={location.pathname + location.search}
        />
      )}
    </div>
  );
};

export default Movies;
