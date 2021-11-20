export const AUTH_FAIL_MESSAGE = 'Do not forget to log in';
export const SIGNIN_FAIL_MESSAGE = 'Make sure that all fields are filled correctly';

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

export const OFFER_IMAGES_COUNT = 6;

export const OFFERS_NEARBY_COUNT = 3;

export const URL_MARKER_DEFAULT = '../../img/pin.svg';

export const URL_MARKER_CURRENT = '../../img/pin-active.svg';

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
}
