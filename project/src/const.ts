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

export enum CardType {
  City = 'CITY',
  Near ='NEAR',
  Favorite ='FAVORITE',
}

export const CardImageSize = {
  Main: {
    Height: '200',
    Width: '260',
  },
  Favorite: {
    Height: '110',
    Width: '150',
  },
};

export const DataCount = {
  OFFER_IMAGE: 6,
  REVIEWS: 10,
};

export const RATING_TO_CALC = 20;

export const SERVER_RESPONSE_OK = 200;

export const UrlMarker = {
  DEFAULT: '../../img/pin.svg',
  CURRENT: '../../img/pin-active.svg',
};

export const CommentLength = {
  MIN: 50,
  MAX: 300,
};

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

export const RATING_STARS = [
  {
    description: 'perfect',
    value: 5,
    starId: '5stars',
  },
  {
    description: 'good',
    value: 4,
    starId: '4stars',
  },
  {
    description: 'not bad',
    value: 3,
    starId: '3stars',
  },
  {
    description: 'badly',
    value: 2,
    starId: '2stars',
  },
  {
    description: 'terribly',
    value: 1,
    starId: '1star',
  },
];
