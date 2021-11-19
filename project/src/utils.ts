import { OfferType, OfferServerType } from './types/offer';
import { User, UserServerType } from './types/user';

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
