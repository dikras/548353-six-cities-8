import React, { useState, useEffect, ChangeEvent, FormEvent } from 'react';
import {connect, ConnectedProps} from 'react-redux';
import {ThunkAppDispatch} from '../../types/action';
import { State } from '../../types/state';
import { ReviewPostType } from '../../types/review';
import { ReviewStatus, ratingStars, MIN_COMMENT_LENGTH, MAX_COMMENT_LENGTH } from '../../const';
import { uploadReview } from '../../store/api-actions';

type CommentFormProps = {
  id: string,
}

const mapStateToProps = ({reviewStatus}: State) => ({
  isReviewUploading: reviewStatus === ReviewStatus.Uploading,
  isReviewUploaded: reviewStatus === ReviewStatus.Uploaded,
  isReviewNotUploaded: reviewStatus === ReviewStatus.NotUploaded,
});

const mapDispatchToProps = (dispatch: ThunkAppDispatch) => ({
  handlePostReview(review: ReviewPostType, id: string) {
    dispatch(uploadReview(review, id));
  },
});

const connector = connect(mapStateToProps, mapDispatchToProps);
type PropsFromRedux = ConnectedProps<typeof connector>;
type ConnectedComponentProps = CommentFormProps & PropsFromRedux;

function CommentForm(props: ConnectedComponentProps): JSX.Element {
  const { id, handlePostReview, isReviewNotUploaded, isReviewUploading, isReviewUploaded } = props;
  const [userComment, setUserComment] = useState('');
  const [userRating, setUserRating] = useState('');
  const isFormComplete = userComment.length > MIN_COMMENT_LENGTH;

  const handleCommentFieldChange = ({target}: ChangeEvent<HTMLTextAreaElement>) => {
    const value = target.value;
    setUserComment(value);
  };

  const handleRatingChange = ({target}: ChangeEvent<HTMLInputElement>) => {
    const value = target.value;
    setUserRating(value);
  };

  const handleFormSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    handlePostReview({userComment, rating: Number(userRating)}, id);
  };

  useEffect(() => {
    if (isReviewUploaded) {
      setUserRating('');
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
        {ratingStars.map((star) => (
          <React.Fragment key={`${star.value}`}>
            <input
              className="form__rating-input visually-hidden"
              name="rating"
              type="radio"
              value={`${star.value}`}
              id={star.id}
              checked={star.value === Number(userRating)}
              onChange={handleRatingChange}
              disabled={isReviewUploading}
            />
            <label htmlFor={star.id} className="reviews__rating-label form__rating-label" title={star.title}>
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
        maxLength={MAX_COMMENT_LENGTH}
        value={userComment}
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

export {CommentForm};
export default connector(CommentForm);
