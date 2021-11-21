import dayjs from 'dayjs';
import { OfferType, OfferServerType } from './types/offer';
import { User, UserServerType } from './types/user';
import { ReviewServerType, ReviewType } from './types/review';
import { RATING_TO_CALC } from './const';

export const adaptOfferToClent = (offer: OfferServerType): OfferType => ({
  bedrooms: offer.bedrooms,
  city: {
    location: {
      latitude: offer.city.location.latitude,
      longitude: offer.city.location.longitude,
      zoom: offer.city.location.zoom,
    },
    name: offer.city.name,
  },
  description: offer.description,
  goods: offer.goods,
  host: {
    avatarUrl: offer.host.avatar_url,
    id: offer.host.id,
    isPro: offer.host.is_pro,
    name: offer.host.name,
  },
  id: offer.id,
  images: offer.images,
  isFavorite: offer.is_favorite,
  isPremium: offer.is_premium,
  location: {
    latitude: offer.location.latitude,
    longitude: offer.location.longitude,
    zoom: offer.location.zoom,
  },
  maxAdults: offer.max_adults,
  previewImage: offer.preview_image,
  price: offer.price,
  rating: offer.rating,
  title: offer.title,
  type: offer.type,
});

export const adaptUserToClient = (user: UserServerType): User => ({
  avatarUrl: user.avatar_url,
  email: user.email,
  id: user.id,
  isPro: user.is_pro,
  name: user.name,
  token: user.token,
});

export const adaptReviewToClient = (review: ReviewServerType): ReviewType => ({
  comment: review.comment,
  date: review.date,
  id: review.id,
  rating: review.rating,
  user: {
    avatarUrl: review.user.avatar_url,
    id: review.user.id,
    isPro: review.user.is_pro,
    name: review.user.name,
  },
});

export const getRating = (rating: number): number => {
  const roundRating: number = Math.floor(rating);
  return roundRating * RATING_TO_CALC;
};

export const getDate = (date: string, format: string): string => dayjs(date).format(format);
