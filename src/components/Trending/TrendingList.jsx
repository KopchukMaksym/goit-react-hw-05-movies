import { TrendingItem } from './TrendingItem';
import PropTypes from 'prop-types';

export const TrendingList = ({ movies, from }) => {
  return (
    <ul>
      {movies.map(movie => {
        return <TrendingItem key={movie.id} movie={movie} from={from} />;
      })}
    </ul>
  );
};

TrendingList.propTypes = {
  from: PropTypes.string,
  movies: PropTypes.array.isRequired,
};
