export enum WarningMessage {
  AuthFail = 'Do not forget to log in',
  SigninFail = 'Make sure that all fields are filled correctly',
  ReviewPostFail = 'Something wrong with posting, try again',
}

export enum AppRoute {
  SignIn = '/login',
  Main = '/',
  Favorites = '/favorites',
  Room = '/offer/:id'
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN'
}

export const MAP_ZOOM = 10;

export const IconSize = {
  CUSTOM_WIDTH: 30,
  CUSTOM_HEIGHT: 40,
  ANCHOR_WIDTH: 20,
  ANCHOR_HEIGHT: 40,
};

export const RATING_TO_CALC = 20;

export const OFFER_IMAGES_COUNT = 6;

export const OFFERS_NEARBY_COUNT = 3;

export const REVIEWS_COUNT = 10;

export const URL_MARKER_DEFAULT = '../../img/pin.svg';

export const URL_MARKER_CURRENT = '../../img/pin-active.svg';

export const MIN_COMMENT_LENGTH = 50;
export const MAX_COMMENT_LENGTH = 300;

export enum CityName {
  Paris = 'Paris',
  Cologne = 'Cologne',
  Brussels = 'Brussels',
  Amsterdam = 'Amsterdam',
  Hamburg = 'Hamburg',
  Dusseldorf = 'Dusseldorf',
}

export enum SortingType {
  Default = 'Popular',
  LowToHigh = 'Price: low to high',
  HighToLow = 'Price: high to low',
  TopRatedFirst = 'Top rated first',
}

export enum APIRoute {
  Offers = '/hotels',
  Login = '/login',
  Logout = '/logout',
  Comments = '/comments',
  Favorites = '/favorite'
}

export enum ReviewStatus {
  NotUploaded = 'NOT_UPLOADED',
  Uploading = 'UPLOADING',
  Uploaded = 'UPLOADED',
  Unknown = 'UNKNOWN',
}

export const ratingStars = [
  {
    title: 'perfect',
    value: 5,
    id: '5-stars',
  },
  {
    title: 'good',
    value: 4,
    id: '4-stars',
  },
  {
    title: 'not bad',
    value: 3,
    id: '3-stars',
  },
  {
    title: 'badly',
    value: 2,
    id: '2-stars',
  },
  {
    title: 'terribly',
    value: 1,
    id: '1-star',
  },
];
