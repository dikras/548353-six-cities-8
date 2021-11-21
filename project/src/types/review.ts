export type AuthorType = {
  avatarUrl: string;
  id: number;
  isPro: boolean;
  name: string;
};

export type ReviewType = {
  comment: string;
  date: string;
  id: number;
  rating: number;
  user: AuthorType;
};

export type ReviewServerType = {
  'comment': string;
  'date': string;
  'id': number;
  'rating': number;
  'user': {
    'avatar_url': string,
    'id': number,
    'is_pro': boolean,
    'name': string,
  }
};

export type ReviewPostType = {
  comment: string;
  rating: number;
}

export type ReviewsType = ReviewType[];
