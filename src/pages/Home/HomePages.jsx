import { fetchApiTreding } from 'api/fetchApi';
import { TrendingList } from 'components/Trending/TrendingList';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const location = useLocation();

  const trendingApi = async () => {
    try {
      const {
        data: { results },
      } = await fetchApiTreding();
      setMovies(results);
    } catch (e) {
      console.log('error', e);
    }
  };

  useEffect(() => {
    trendingApi();
  }, []);

  return (
    <div>
      <h1>Trending today</h1>
      <TrendingList movies={movies} from={location.pathname} />
    </div>
  );
};

export default Home;
