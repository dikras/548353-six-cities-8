import React, { useState, useEffect, ChangeEvent, FormEvent } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ReviewStatus, RATING_STARS, CommentLength } from '../../const';
import { uploadReview } from '../../store/api-actions';
import { getReviewsStatus } from '../../store/reviews-reducer/selectors';

type CommentFormProps = {
  id: string,
}

function CommentForm(props: CommentFormProps): JSX.Element {
  const reviewStatus = useSelector(getReviewsStatus);
  const isReviewUploading = reviewStatus === ReviewStatus.Uploading;
  const isReviewUploaded = reviewStatus === ReviewStatus.Uploaded;
  const isReviewNotUploaded = reviewStatus === ReviewStatus.NotUploaded;

  const { id } = props;

  const [comment, setUserComment] = useState('');
  const [rating, setUserRating] = useState(0);
  const isFormComplete = comment.length > CommentLength.MIN && rating > 0;

  const dispatch = useDispatch();

  const handleCommentFieldChange = ({target}: ChangeEvent<HTMLTextAreaElement>) => {
    const value = target.value;
    setUserComment(value);
  };

  const handleRatingChange = ({target}: ChangeEvent<HTMLInputElement>) => {
    const value = target.value;
    setUserRating(Number(value));
  };

  const handleFormSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    dispatch(uploadReview({comment, rating}, id));
  };

  useEffect(() => {
    if (isReviewUploaded) {
      setUserRating(0);
      setUserComment('');
    }
  }, [isReviewUploaded]);

  return (
    <form
      className="reviews__form
      form" action="#"
      method="post"
      onSubmit={handleFormSubmit}
    >
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        {RATING_STARS.map(({description, value, starId}) => (
          <React.Fragment key={`${value}`}>
            <input
              className="form__rating-input visually-hidden"
              name="rating"
              type="radio"
              value={`${value}`}
              id={starId}
              checked={value === rating}
              onChange={handleRatingChange}
              disabled={isReviewUploading}
            />
            <label htmlFor={starId} className="reviews__rating-label form__rating-label" title={description}>
              <svg className="form__star-image" width="37" height="33">
                <use xlinkHref="#icon-star"></use>
              </svg>
            </label>
          </React.Fragment>
        ))}
      </div>
      <textarea
        className="reviews__textarea form__textarea"
        id="review" name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        onChange={handleCommentFieldChange}
        maxLength={CommentLength.MAX}
        value={comment}
        disabled={isReviewUploading}
      />
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled={!isReviewNotUploaded && (!isFormComplete || isReviewUploading)}>Submit</button>
      </div>
    </form>
  );
}

export default CommentForm;
