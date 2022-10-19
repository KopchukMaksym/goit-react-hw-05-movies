import { fetchApiMovieReviews } from 'api/fetchApi';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();

  const MovieReviewsApi = async () => {
    try {
      const {
        data: { results },
      } = await fetchApiMovieReviews(movieId);
      setReviews(results);
    } catch (e) {
      console.log('error', e);
    }
  };

  useEffect(() => {
    MovieReviewsApi();
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      {!!reviews.length &&
        reviews.map(el => (
          <div key={el.id}>
            <h3>Author: {el.author}</h3>
            <p>{el.content}</p>
          </div>
        ))}

      {!reviews.length && <p>We don't have any reviews for this movie.</p>}
    </div>
  );
};
export default Reviews;
