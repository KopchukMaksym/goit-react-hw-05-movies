import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export const TrendingItem = ({ movie, from }) => {
  return (
    <li>
      <Link to={`/movies/${movie.id}`} state={{ from }}>
        <p>{movie.original_title}</p>
      </Link>
    </li>
  );
};

TrendingItem.propTypes = {
  from: PropTypes.string,
  movie: PropTypes.shape({
    id: PropTypes.number.isRequired,
    original_title: PropTypes.string,
  }),
};
