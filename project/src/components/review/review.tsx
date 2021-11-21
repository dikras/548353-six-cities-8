import { ReviewType } from '../../types/review';
import { getDate } from '../../utils';

type ReviewProps = {
  review: ReviewType;
};

function Review(props: ReviewProps): JSX.Element {
  const { review } = props;
  const { comment, date, rating, user } = review;

  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img className="reviews__avatar user__avatar" src={ user.avatarUrl } width="54" height="54" alt="Reviews avatar" />
        </div>
        <span className="reviews__user-name">
          { user.name }
        </span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{ width: '80%' }}></span>
            <span className="visually-hidden">Rating { rating }</span>
          </div>
        </div>
        <p className="reviews__text">
          { comment }
        </p>
        <time className="reviews__time" dateTime={getDate(date, 'YYYY-MM-DD')}>{getDate(date, 'MMMM YYYY')}</time>
      </div>
    </li>
  );
}

export default Review;
