export interface MovieDto {
  imdbID: string;
  Title: string;
  Poster: string;
  Year: string;
  Type: string;
  imdbRating: string;
}

export interface MovieRequest {
  searchText: string;
}

export interface MovieState {
  entities: MovieDto[];
  loading: boolean;
}
